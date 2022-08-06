import {BiSun, BiCloud} from 'react-icons/bi'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import {type Weather} from 'lib/types'

export default function Weather() {
  const {data} = useSWR<Weather>('/api/weather', fetcher)
  const {temperature, humidity} = data || {}
  const isSunny = humidity < 80

  return (
    <div className="flex flex-row items-center">
      {isSunny ? (
        <BiSun className="w-5 h-5 mr-1 text-[#24292f]" />
      ) : (
        <BiCloud className="w-5 h-5 mr-1 text-[#24292f]" />
      )}
      <span className="font-normal text-[#24292f]">{Math.ceil(temperature)} ºC</span>
    </div>
  )
}
