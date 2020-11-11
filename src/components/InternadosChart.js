import React from "react";
import { Chart } from "react-charts";
import moment from 'moment';
import ResizableBox from "./ResizableBox";

const InternadosChart = (props) => {
  const axes = React.useMemo(() => [{primary: true, type: "time", position: "bottom", showGrid: false, },{ type: "linear", position: "left" },],[]);
  const series = React.useMemo(() => ({showPoints: false,}),[]);
  const data = React.useMemo(() => [
    
  {
   label:"Capacidade Máxima em UCI",
   data:[
      {
         primary: moment('14-03-2020', 'DD-MM-YYYY hh:mm'),
         secondary: 630
      },
      {
         primary: moment(),
         secondary: 630
      },
   ]
  },
  {
    label:"Capacidade Máxima em Enfermaria",
    data:[
      {
          primary: moment('14-03-2020', 'DD-MM-YYYY hh:mm'),
          secondary: 3520
      },
      {
          primary: moment(),
          secondary: 3520
      }
    ]
  },
  {
    label: "Número de internados em UCI",
    data: props.internadosUci
  },
  {
    label: "Número de internados em Enfermaria",
    data: props.internadosEnfermaria
  },
  ],[])

  return (
    <ResizableBox width={992} height={400}>
      <Chart data={data} series={series} axes={axes} tooltip />
    </ResizableBox>
  );
}

export default InternadosChart;
