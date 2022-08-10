import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function Pressure() {
  const {data} = useSWR<Weather>('/api/weather/get', fetcher)

  const pressure = data?.pressure

  return <Card header="Pressure" metric={`${pressure} hPa`} />
}
