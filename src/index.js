import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader } from 'pages/Reader';
import { CreatePublication } from 'pages/CreatePublication';
import './index.css';
// import publications from './publications.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Reader />} />
            <Route path="create" element={<CreatePublication />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
