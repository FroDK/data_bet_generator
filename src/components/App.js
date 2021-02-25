import './App.css';
// import { useState } from 'react';
import {
  Divider,
} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MainGrid } from './MainGrid/MainGrid';
// import { NavBar } from './NavBar/NavBar';
import Icon from '@material-ui/core/Icon';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*<NavBar />*/}
      <div className="App">
        <div className="title-block">
          <p className="title-block__text">Симуляция ставок</p>
        </div>
        <Divider />
        <div className="title-wrapper">
          <Icon className="icon">settings</Icon>
          <p className="settings-text">Параметры</p>
        </div>
        <div className="content-block">
          <MainGrid />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
