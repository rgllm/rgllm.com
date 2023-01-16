import type {NextApiRequest, NextApiResponse} from 'next'

type Data =
  | Array<{
      type: string
      current: number
      dailyHistory: Array<{valor: number; hora: string}>
    }>
  | {error: string}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let data = await fetch('https://datahub.ren.pt/service/Electricity/ProductionBreakdown/1266', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'en',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'x-requested-with': 'XMLHttpRequest',
      Referer: 'https://datahub.ren.pt/pt/',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
    body: null,
  })

  let dataResponse = await data.json()

  if (data.status === 200) {
    const series = dataResponse?.series
    let energy = []

    series.forEach(serie => {
      const finalSerie = {
        type: serie?.name,
        current: serie?.data[serie?.data.length - 1],
        dailyHistory: serie.data.map((medicao, index) => ({
          valor: medicao,
          hora: dataResponse?.xAxis?.categories[index],
        })),
      }
      energy.push(finalSerie)
    })

    res.status(200).json(energy)
  } else {
    res.status(500).json({error: 'Error fetching data'})
  }
}
