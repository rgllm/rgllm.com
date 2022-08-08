import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function Humidity() {
  const {data} = useSWR<Weather>('/api/weather', fetcher)

  const humidity = data?.humidity

  return <Card header="Humidity" metric={`${humidity}%`} />
}
