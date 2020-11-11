import moment from 'moment';

function buildinternadosCharObject(datas, internados) {
  const chartData = [];

  if(datas && internados) {
    const datasArray = Object.values(datas);
    const internadosArray = Object.values(internados);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < datasArray.length; i++) {
      if(datasArray[i] && internadosArray[i]) {
        chartData.push({
          primary: moment(datasArray[i], 'DD-MM-YYYY hh:mm'),
          secondary: internadosArray[i],
        });
      }
    }
  }
  
  return chartData;
}

export default buildinternadosCharObject;