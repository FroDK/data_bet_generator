import { Random, MersenneTwister19937 } from "random-js";
const random = new Random(MersenneTwister19937.autoSeed());

export const dataGenerator = (betData, setBetData, balance, betCounts,
                              winrate, betPercent, cefficientRange) => {

  betPercent = betPercent / 100;
  winrate = winrate / 100;
  const dataBets = []
  const dataProfit = []
  const dataCurrentBets = []
  const dataCF = []
  const copyBalance = balance;
  const totalBets = betCounts;
  let maxWinStrick = 0;
  let maxLoseStrick = 0;
  const arrGenData = {
      win: Math.round(totalBets * winrate),
      lose: Math.round(totalBets - (totalBets * winrate))
  }
  const arr = random.shuffle(Array(arrGenData['win']).fill(1).concat(Array(arrGenData['lose']).fill(0)));
  const obj = {}
  arr.forEach((e, i) => {
      obj[i + 1] = {
          isWin: !!e,
          cf: +random.real(cefficientRange[0], cefficientRange[1]).toFixed(2)
      }
  })

  const dataMoneys = Object.values(obj).map((e) => {
    const bet = Math.round((balance * betPercent)*100)/100;
    dataCurrentBets.push(bet);
    dataCF.push(e['cf']);
    if (e['isWin']) {
        balance += (balance * betPercent * e['cf']) - (balance * betPercent);
        return Math.round(balance);
    } else {
        balance -= (balance * betPercent * e['cf']) - (balance * betPercent);
        return Math.round(balance);
    }
  })
  dataMoneys.unshift(copyBalance);

  dataMoneys.forEach(e => {
      const percent = Math.round(100 * e / copyBalance - 100);
      dataProfit.push(Math.round(e - copyBalance));
      dataBets.push(percent);
  })

  let tempMaxLose = 0;
  let tempMaxWin = 0;
  arr.forEach((e, i) => {
      if (e === 0) {
        tempMaxWin=0
        tempMaxLose++;
        if (tempMaxLose>maxLoseStrick) {
          maxLoseStrick = tempMaxLose;
        }
        arr[i] = -1;
      } else {
        tempMaxLose = 0
        tempMaxWin++;
        if (tempMaxWin>maxWinStrick) {
          maxWinStrick = tempMaxWin;
        }
      }
  })

  arr.unshift(0);
  dataCF.unshift(0);
  dataCurrentBets.unshift(0);

  let x = 0;
  const middleCF = Math.round((dataCF.map(i=>x+=i).reverse()[0])/dataCF.length*100)/100;

  const betSum = dataCurrentBets.reduce((sum, el) => {
    return sum + el;
  })
  const middleBet = Math.round(betSum/(dataCurrentBets.length-1)*100)/100;

  const lengthDataMoneys = Array.from(Array(dataMoneys.length).keys())
  const cloneBetData = {
      data: dataMoneys,
      len: lengthDataMoneys,
      bets: dataBets,
      currentBets: dataCurrentBets,
      arr: arr,
      profit: dataProfit,
      cf: dataCF,
      wins: maxWinStrick,
      loses: maxLoseStrick,
      midCf: middleCF,
      midBet: middleBet,
  }
  setBetData(cloneBetData);
}
