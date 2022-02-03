import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
// import { Example1 } from 'components/Example1';
// import { Example2 } from 'components/Example2';
// import { Example3 } from 'components/Example3';
// import { Example4 } from 'components/Example4';
import { Example5 } from 'components/Example5';
import './index.css';

const theme = {};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Example5 />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
