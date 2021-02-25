// import { Random, MersenneTwister19937 } from "random-js";
// const random = new Random(MersenneTwister19937.autoSeed());
//
//
// export const dataGenerator = (data) => {
//   const winrate = sliderWinrate / 100;
//   const totalBets = +sliderValues;
//   const arrGenData = {
//       win: Math.round(totalBets * winrate),
//       lose: Math.round(totalBets - (totalBets * winrate))
//   }
//   const arr = random.shuffle(Array(arrGenData['win']).fill(1).concat(Array(arrGenData['lose']).fill(0)));
//   const obj = {}
//   arr.forEach((e, i) => {
//       obj[i + 1] = {
//           isWin: e ? true : false,
//           cf: +random.real(sliderCFValues[0], sliderCFValues[1]).toFixed(2)
//       }
//   })
//   let balance = +formik.values.balance;
//   const betPercent = (sliderBet) / 100;
//   const dataBets = []
//   const dataPercents = []
//   const dataMoneys = Object.values(obj).map((e) => {
//       if (e['isWin']) {
//           balance += (balance * betPercent * e['cf']) - (balance * betPercent);
//           return Math.round(balance);
//       } else {
//           balance -= (balance * betPercent * e['cf']) - (balance * betPercent);
//           return Math.round(balance);
//       }
//   })
//   dataMoneys.unshift(+formik.values.balance);
//
//   dataMoneys.forEach((e) => {
//       const percent = Math.round(100 * e / formik.values.balance - 100);
//       dataBets.push(percent);
//   })
//
//   let tempBalance = +formik.values.balance;
//   dataMoneys.forEach((e, i) => {
//       if (i !== 0) {
//           const percent = Math.round(100 * e / tempBalance - 100);
//           dataPercents.push(percent);
//           tempBalance = e;
//       }
//   })
//   dataPercents.unshift(0);
//
//   arr.forEach((e, i) => {
//       if (e === 0) {
//           arr[i] = -1;
//       }
//   })
//   arr.unshift(0);
//   const lengthDataMoneys = Array.from(Array(dataMoneys.length).keys())
//   const cloneBetData = {
//       data: dataMoneys,
//       len: lengthDataMoneys,
//       bets: dataBets,
//       percents: dataPercents,
//       arr: arr,
//   }
// }
