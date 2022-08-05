import {type NextRequest} from 'next/server'

const axios = require('axios')

const bearer_token = process.env.WEATHER_BEARER_TOKEN
const api_url = process.env.WEATHER_API_URL

export default async function handler(req: NextRequest) {
  try {
    const result = await axios({
      url: api_url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearer_token}`,
        'Content-Type': 'application/json',
      },
    })

    return new Response(
      JSON.stringify({
        temperature: result?.data?.attributes?.temperature,
        pressure: result?.data?.attributes?.pressure,
        humidity: result?.data?.attributes?.humidity,
        unit_of_measurement: result?.data?.attributes?.unit_of_measurement,
        updated: result?.data?.last_updated,
      }),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
        },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }
}
