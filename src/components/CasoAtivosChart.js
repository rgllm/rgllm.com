import React from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox";

const AtivosChart = (props) => {
  const axes = React.useMemo(() => [{primary: true, type: "time", position: "bottom", showGrid: false, },{ type: "linear", position: "left" },],[]);
  const series = React.useMemo(() => ({showPoints: false,}),[]);
  const data = React.useMemo(() => [  
  {
    label: "Casos Ativos",
    data: props.casosAtivos
  },
  ],[])

  return (
    <ResizableBox width={992} height={400}>
      <Chart data={data} series={series} axes={axes} tooltip />
    </ResizableBox>
  );
}

export default AtivosChart;
