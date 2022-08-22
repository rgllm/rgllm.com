import {LineChart, Legend, Line, CartesianGrid, XAxis, YAxis} from 'recharts'

export default function Graph({data, ykey, xkey}) {
  return (
    <LineChart
      width={700}
      height={400}
      data={data}
      margin={{top: 5, right: 20, bottom: 5, left: 0}}
    >
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey={ykey} stroke="black" strokeWidth={1.5} dot={false} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={xkey} stroke="#ccc" strokeWidth={0.5} fontSize={0} />
      <YAxis stroke="#ccc" strokeWidth={0.5} />
    </LineChart>
  )
}
