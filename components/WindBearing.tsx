import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {Weather} from 'lib/types'
import Card from 'components/Card'

export default function WindBearing() {
  const {data} = useSWR<Weather>('/api/weather/get', fetcher)

  const windBearing = data?.wind_bearing

  return <Card header="Wind Bearing" metric={`${windBearing}º`} />
}
