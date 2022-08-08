import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function WeatherCondition() {
  const {data} = useSWR<Weather>('/api/weather', fetcher)

  const condition = data?.condition
  const capitalizedCondition = condition?.charAt(0).toUpperCase() + condition?.slice(1)

  return <Card header="Condition" metric={`${capitalizedCondition}`} />
}
