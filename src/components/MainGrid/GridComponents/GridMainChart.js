import classNames from 'classnames';
import {
  Divider,
  Grid,
} from '@material-ui/core';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as ChartAnnotation from 'chartjs-plugin-annotation';

Chart.plugins.register([ChartAnnotation]);


export const GridMainChart = ({betData}) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <div className={
      classNames({
        "grid-chart": true,
        "hidden": false,
        })
      }>
        <Divider />
        <Line
          height={320}
          data={
            {
              labels: betData['len'],
              datasets: [{
                data: betData['data'],
                label: "Баланс",
                borderColor: "rgb(54, 162, 235)",
                backgroundColor: "rgba(54, 162, 235, .2)",
                fill: "origin"
                }
              ]
            }
          }

          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Основной график',
              fontSize: 24,
              fontColor: '#32454c',
          },
            annotation: {
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: betData['data'] ? betData['data'][0] : 0,
                borderColor: 'rgba(0,0,0,.3)',
                borderWidth: 1,
              }]
            },
            tooltips: {
              enabled: true,
              mode: 'index',
              intersect: true,
              displayColors: false,
              titleFontSize: 16,
              bodyFontSize: 14,
              xPadding: 10,
              yPadding: 10,

            callbacks: {
              afterBody: function(t, d) {
                const percent = `${betData.bets[t[0].index]}%`;
                const status = betData.arr[t[0].index] === 1 ? "выиграна"
                :betData.arr[t[0].index] === 0 ? "не произведена" : "проиграна";
                return `Статус: ${status}\n` +
                 `Профит(%): ${percent}\n` +
                 `Профит: ${betData.profit[t[0].index]}\n`+
                 `Коеф.: ${betData.cf[t[0].index]}`;
                }
              }
            }
          }}/>
      </div>
    </Grid>
  );
}
