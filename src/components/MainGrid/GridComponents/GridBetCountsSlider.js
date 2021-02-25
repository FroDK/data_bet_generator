import {
    Grid,
    Slider,
    Typography,
} from '@material-ui/core';

const marksBetCounts = [{
        value: 10,
        label: '10'
    },
    {
        value: 30,
        label: '30'
    },
    {
        value: 45,
        label: '45'
    },
    {
        value: 60,
        label: '60'
    },
    {
        value: 120,
        label: '120'
    }
]

export const GridBetCountsSlider = ({betCounts, handleChange}) => {
  return(
    <Grid item xs={12} sm={6} md={6}>
      <div className="grid-item grid-item__bet-counts">
        <Typography id="betCounts" gutterBottom>
          Количество ставок — <span className="value">{betCounts}</span>
        </Typography>
        <Slider
          value={betCounts}
          min={10}
          step={5}
          max={120}
          marks={marksBetCounts}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="betCounts"
        />
      </div>
    </Grid>
  );
}
