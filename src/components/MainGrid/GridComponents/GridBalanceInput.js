import {
    Grid,
    TextField,
    Tooltip,
    InputAdornment,
} from '@material-ui/core';

export const GridBalanceInput = ({formik}) => {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <div className="grid-item grid-item__balance">
        <Tooltip title="Баланс" placement="top" arrow>
          <label htmlFor="balance">Баланс</label>
        </Tooltip>
        <TextField
          id="balance"
          name="balance"
          fullWidth
          value={formik.values.balance}
          onChange={formik.handleChange}
          error={formik.touched.balance && Boolean(formik.errors.balance)}
          helperText={formik.touched.balance && formik.errors.balance}
          variant="outlined"
          size="small"
          InputProps={{ startAdornment:<InputAdornment position="start">₽</InputAdornment> }}
          />
      </div>
    </Grid>
  );
}
