import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme } from './themes/createTheme';
import App from './App';
import GlobalStyle from './themes/globalStyle';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );
});
