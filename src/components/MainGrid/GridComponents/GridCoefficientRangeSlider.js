import {
    Grid,
    Slider,
    Typography,
} from '@material-ui/core';

const marksCoefficientRange = [{
        value: 1.1,
        label: '1.1'
    },
    {
        value: 2.0,
        label: '2.0'
    },
    {
        value: 3.0,
        label: '3.0'
    },
    {
        value: 4.0,
        label: '4.0'
    },
    {
        value: 5.0,
        label: '5.0'
    },
    {
        value: 6.0,
        label: '6.0'
    }
]

export const GridCoefficientRangeSlider = ({cefficientRange, handleChange}) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <div className="grid-item grid-item_coefficient-range">
        <Typography id="cfRange" gutterBottom>
          Диапазон коеффициентов — <span className="value">
            {`${cefficientRange[0]} - ${cefficientRange[1]}`}
            </span>
        </Typography>
        <Slider
          value={cefficientRange}
          min={1.1}
          step={0.1}
          max={6.0}
          marks={marksCoefficientRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="cfRange"
        />
      </div>
    </Grid>
  );
}
