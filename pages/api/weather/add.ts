import type {NextApiRequest, NextApiResponse} from 'next'
import prisma from 'lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = req?.body

      await prisma.weather.create({
        data: {
          temperature: body?.temperature,
          humidity: body?.humidity,
          pressure: body?.pressure,
          wind_speed: body?.wind_speed,
          wind_bearing: body?.wind_bearing,
        },
      })

      return res.status(200).json({message: 'success'})
    } catch (e) {
      return res.status(500).json({message: e.message})
    }
  }

  return res.send('Method not allowed.')
}
