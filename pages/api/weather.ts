import {type NextRequest} from 'next/server'

const bearer_token = process.env.WEATHER_BEARER_TOKEN
const api_url = process.env.WEATHER_API_URL

export default async function handler(req: NextRequest) {
  const response = await fetch(api_url, {
    method: req.method,
    headers: {
      Authorization: `Bearer ${bearer_token}`,
      'Content-Type': 'application/json',
    },
  })

  const result = await response.json()

  return new Response(
    JSON.stringify({
      temperature: result?.attributes?.temperature,
      pressure: result?.attributes?.pressure,
      humidity: result?.attributes?.humidity,
      unit_of_measurement: result?.attributes?.unit_of_measurement,
      updated: result?.last_updated,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'max-age=0, s-maxage=600',
      },
    },
  )
}

export const config = {
  runtime: 'experimental-edge',
}
