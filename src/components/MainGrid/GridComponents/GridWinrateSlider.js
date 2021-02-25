import {
    Grid,
    Slider,
    Typography,
} from '@material-ui/core';

const marksWinrate = [{
        value: 1,
        label: '1'
    },
    {
        value: 50,
        label: '50'
    },
    {
        value: 65,
        label: '65'
    },
    {
        value: 75,
        label: '75'
    },
    {
        value: 85,
        label: '85'
    },
    {
        value: 99,
        label: '99'
    }
]

export const GridWinrateSlider = ({winrate, handleChange}) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <div className="grid-item grid-item__winrate">
        <Typography id="percentBet" gutterBottom>
          Процент побед — <span className="value">{winrate}%</span>
        </Typography>
        <Slider
          value={winrate}
          min={1}
          step={1}
          max={99}
          marks={marksWinrate}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="percentBet"
          />
      </div>
    </Grid>
  );
}
