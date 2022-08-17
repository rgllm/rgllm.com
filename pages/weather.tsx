import Container from 'components/Container.server'
import Temperature from 'components/Temperature'
import Humidity from 'components/Humidity'
import Pressure from 'components/Pressure'
import WeatherCondition from 'components/WeatherCondition'
import WindSpeed from 'components/WindSpeed'
import WindBearing from 'components/WindBearing'

export default function Weather(props) {
  return (
    <Container
      title="Weather - Rogério Moreira"
      description="This is a weather dashboard, built with Next.js and fetching all the data from my Home
    Assistant setup at my house. The weather here is for Braga, Portugal."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
          Weather ☀️
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600">
            This is a weather dashboard, built with Next.js and fetching all the data from my Home
            Assistant setup at my house. The weather here is for Braga, Portugal.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <WeatherCondition />
          <Temperature />
          <Humidity />
          <Pressure />
          <WindSpeed />
          <WindBearing />
        </div>
      </div>
    </Container>
  )
}
