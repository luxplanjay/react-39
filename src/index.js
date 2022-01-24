import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Reader as LSReader } from 'components/LSReader/Reader';
import { Reader } from 'pages/Reader';
import { VideoPlayer } from 'pages/VideoPlayer';
import { CreatePublication } from 'pages/CreatePublication';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import publications from './publications.json';
import './index.css';

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
            <Route
              path="ls-reader"
              element={<LSReader items={publications} />}
            />
            <Route path="player" element={<VideoPlayer />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
