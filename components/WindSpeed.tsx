import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function WindSpeed() {
  const {data} = useSWR<Weather>('/api/weather', fetcher)

  const windSpeed = data?.wind_speed

  return <Card header="Wind Speed" metric={`${windSpeed} km/h`} />
}
