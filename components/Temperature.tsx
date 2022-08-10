import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function Temperature() {
  const {data} = useSWR<Weather>('/api/weather/get', fetcher)

  const temperature = data?.temperature

  return <Card header="Temperature" metric={`${temperature} ºC`} />
}
