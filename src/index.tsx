import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { createTheme } from './themes/createTheme';
import App from './App';
import GlobalStyle from './themes/globalStyle';

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();

  ReactDOM.render(
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>,
    document.getElementById('root')
  );
});
