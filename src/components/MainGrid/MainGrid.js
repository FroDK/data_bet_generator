import './MainGrid.css';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  GridBalanceInput,
  GridBetCountsSlider,
  GridBetPercentSlider,
  GridButton,
  GridCoefficientRangeSlider,
  GridMainChart,
  GridOptionalChart,
  GridWinrateSlider,
  GridDataText,
 } from './GridComponents';
import {
  Grid,
} from '@material-ui/core';
import {dataGenerator} from '../../lib/dataGenerator';


const validationSchema = yup.object({
    balance: yup
        .number()
        .typeError('Баланс должен быть числом')
        .required('Необходимо заполнить это поле')
        .positive('Баланс должен быть положительным числом'),
});


export const MainGrid = () => {
  const [betData, setBetData] = useState({});
  const [betCounts, setBetCounts] = useState(30);
  const [winrate, setWinrate] = useState(70);
  const [betPercent, setBetPercent] = useState(5);
  const [cefficientRange, setCoefficientRange] = useState([1.5, 2.5]);

  useEffect(() => {
      document.body.style.overflow = "auto";
      const loading = document.getElementById('loading');
      if (loading) {loading.remove();}
    }, [])

  const formik = useFormik({
      initialValues: {
          balance: '500',
      },
      validationSchema: validationSchema,
      onSubmit: ({balance}) => {
        balance = +balance;
        dataGenerator(betData, setBetData, balance, betCounts,
          winrate, betPercent, cefficientRange
        );
      },
    })

  const handleChangeWinrate = (event, value) => {
    setWinrate(value);
  }
  const handleChangeBetCounts = (event, value) => {
    setBetCounts(value);
  }
  const handleChangeBetPercent = (event, value) => {
    setBetPercent(value);
  }
  const handleChangeCoefficientRange = (event, value) => {
    setCoefficientRange(value);
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <GridBalanceInput
          formik={formik}
         />
         <GridWinrateSlider
          winrate={winrate}
          handleChange={handleChangeWinrate}
         />
         <GridBetCountsSlider
          betCounts={betCounts}
          handleChange={handleChangeBetCounts}
         />
         <GridBetPercentSlider
          betPercent={betPercent}
          handleChange={handleChangeBetPercent}
         />
         <GridCoefficientRangeSlider
          cefficientRange={cefficientRange}
          handleChange={handleChangeCoefficientRange}
         />
         <GridButton />
         <GridDataText
          betData={betData}
         />
         <GridMainChart
          betData={betData}
         />
         <GridOptionalChart
         betData={betData}
         />
      </Grid>
    </form>
  );
}
