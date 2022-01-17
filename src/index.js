import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
// import { Example1 } from 'components/Example1';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publications from './publications.json';

const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
