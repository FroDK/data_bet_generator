import classNames from 'classnames';
import {
    Divider,
    Grid,
} from '@material-ui/core';
import { Bar } from 'react-chartjs-2';


export const GridOptionalChart = ({betData}) => {
  return (
    <Grid
      container
      item xs={12}
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
        <Bar
          height={150}
          data={
          {
            labels: betData['len'],
            datasets: [{
                data: betData['arr'],
                label: "Выйграло/Проиграло",
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgb(255, 99, 132)",
                fill: "origin",
              },
            ]
          }}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'График побед и поражений',
            fontSize: 24,
            fontColor: '#32454c',
        },
          tooltips: {
            mode: 'point',
            intersect: false,
          }
        }}
        />
      </div>
    </Grid>
  );
}
