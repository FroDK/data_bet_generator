import { Divider, Grid } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


export const GridDataText = ({betData}) => {
  return(
    <div className="grid-data">
      <Divider/>
      <div className="title-wrapper">
        <Icon className="icon">info</Icon>
        <p className="grid-data__title">Полная информация</p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <p>Баланс:&nbsp;&nbsp;
            <span className="value-data">
            {betData.data ? betData.data[betData.data.length-1] : "0"}
            </span>
          </p>
          <p>Профит(%):&nbsp;&nbsp;
            <span className="value-data">
            {betData.bets ? betData.bets[betData.bets.length-1] : "0"}%
            </span>
          </p>
          <p>Профит:&nbsp;&nbsp;
            <span className="value-data">
            {betData.profit ? betData.profit[betData.profit.length-1] : "0"}
            </span>
          </p>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <p>Макс. выигранных подряд:&nbsp;&nbsp;
            <span className="value-data">
            {betData.wins ? betData.wins: "0"}
            </span>
          </p>
          <p>Макс. проигранных подряд:&nbsp;&nbsp;
            <span className="value-data">
            {betData.loses ? betData.loses : "0"}
            </span>
          </p>
          <p>Средний коеффициент:&nbsp;&nbsp;
            <span className="value-data">
            {betData.midCf ? betData.midCf : "0"}
            </span>
          </p>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <p>Самая большая ставка:&nbsp;&nbsp;
            <span className="value-data">
            {betData.currentBets ? Math.max(...betData.currentBets) : "0"}
            </span>
          </p>
          <p>Средняя ставка:&nbsp;&nbsp;
            <span className="value-data">
            {betData.midBet ? betData.midBet : "0"}
            </span>
          </p>
          <p>Минимальная ставка:&nbsp;&nbsp;
            <span className="value-data">
            {betData.currentBets ? Math.min(...betData.currentBets.slice(1)) : "0"}
            </span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
