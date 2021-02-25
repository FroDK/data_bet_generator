import {
    Grid,
    Slider,
    Typography,
} from '@material-ui/core';

const marksBetPercent = [{
        value: 0.5,
        label: '0.5'
    },
    {
        value: 10.0,
        label: '10.0'
    },
    {
        value: 20.0,
        label: '20.0'
    },
    {
        value: 30.0,
        label: '30.0'
    },
    {
        value: 50.0,
        label: '50.0'
    },
    {
        value: 100,
        label: '100'
    }
]

export const GridBetPercentSlider = ({betPercent, handleChange}) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <div className="grid-item grid-item__bet-percent">
        <Typography id="percentBet" gutterBottom>
        Процент ставки — <span className="value">{betPercent}%</span>
        </Typography>
        <Slider
          value={betPercent}
          min={0.5}
          step={0.5}
          max={100}
          marks={marksBetPercent}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="percentBet"
        />
      </div>
    </Grid>
  );
}
