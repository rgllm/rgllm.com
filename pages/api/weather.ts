import {NextApiRequest, NextApiResponse} from 'next'

const axios = require('axios')

const bearer_token = process.env.WEATHER_BEARER_TOKEN
const api_url = process.env.WEATHER_API_URL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await await axios({
      url: api_url,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearer_token}`,
        'Content-Type': 'application/json',
      },
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        temperature: response?.data?.attributes?.temperature,
        pressure: response?.data?.attributes?.pressure,
        humidity: response?.data?.attributes?.humidity,
        unit_of_measurement: response?.data?.attributes?.unit_of_measurement,
        updated: response?.data?.last_updated,
      }),
    )
  } catch (error) {
    res.json(error)
    res.status(500).end()
  }
}
