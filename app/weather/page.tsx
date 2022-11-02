'use client'

import Temperature from 'components/Temperature'
import Humidity from 'components/Humidity'
import Pressure from 'components/Pressure'
import WeatherCondition from 'components/WeatherCondition'
import WindSpeed from 'components/WindSpeed'
import WindBearing from 'components/WindBearing'
import Graph from 'components/Graph'
import prisma from 'lib/prisma'

async function fetchWeather() {
  const weatherMeasurements = await prisma.weather.findMany({
    orderBy: {
      time: 'asc',
    },
  })

  weatherMeasurements.map(item => {
    //@ts-ignore
    item.time = item.time.toDateString()
  })

  return {
    weatherMeasurements,
  }
}

export default async function Weather() {
  const {weatherMeasurements} = await fetchWeather()

  if (!weatherMeasurements) return <></>

  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">Weather ☀️</h1>
      <div className="mb-8">
        <p className="mb-4 text-gray-600">
          This is a weather dashboard, built with Next.js and fetching all the data from my Home
          Assistant setup at my house. The weather here is for Braga, Portugal.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 my-2 mb-8 sm:grid-cols-2">
        <WeatherCondition />
        <Temperature />
        <Humidity />
        <Pressure />
        <WindSpeed />
        <WindBearing />
      </div>
      <div className="w-full">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-black md:text-3xl">Graphs</h2>
        <Graph data={weatherMeasurements} ykey="temperature" xkey="time" />
        <Graph data={weatherMeasurements} ykey="humidity" xkey="time" />
        <Graph data={weatherMeasurements} ykey="pressure" xkey="time" />
        <Graph data={weatherMeasurements} ykey="wind_bearing" xkey="time" />
        <Graph data={weatherMeasurements} ykey="wind_speed" xkey="time" />
      </div>
    </div>
  )
}
