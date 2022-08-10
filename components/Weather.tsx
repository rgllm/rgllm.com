import Link from 'next/link'
import {BiSun, BiCloud} from 'react-icons/bi'
import {MdNightlight} from 'react-icons/md'
import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import {type Weather} from 'lib/types'

function iconRenderSwitch(param) {
  switch (param) {
    case 'cloudy':
      return <BiCloud className="w-5 h-5 mr-1 text-[#24292f]" />
    case 'night':
      return <MdNightlight className="w-5 h-5 mr-1 text-[#24292f]" />
    case 'sun':
      return <BiSun className="w-5 h-5 mr-1 text-[#24292f]" />
    default:
      return <BiCloud className="w-5 h-5 mr-1 text-[#24292f]" />
  }
}

export default function Weather() {
  const {data} = useSWR<Weather>('/api/weather/get', fetcher)
  const {temperature, condition} = data || {}
  const icon = condition?.includes('night')
    ? 'night'
    : condition?.includes('cloudy') || condition?.includes('rainy')
    ? 'cloudy'
    : 'sun'

  if (!temperature || !condition) return null

  return (
    <Link href="/weather">
      <a className="flex flex-row items-center umami--click--weather">
        {iconRenderSwitch(icon)}
        <span className="font-normal text-[#24292f]">{Math.ceil(temperature)} ºC</span>
      </a>
    </Link>
  )
}
