import {
    Grid,
    Button,
} from '@material-ui/core';

export const GridButton = () => {
  return (
    <Grid
      container
      item xs={12}
      direction="row"
      justify="center"
      alignItems="center"
      >
      <div className="grid-button">
        <Button fullWidth variant="contained" color="primary" type="submit">
          generate
        </Button>
      </div>
    </Grid>
  );
}
