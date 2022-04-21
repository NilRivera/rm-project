import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configureStore';
import './index.css';
import App from './App';

const Index: React.FunctionComponent = () => (
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

const container = document.getElementById('root');
const root:any = createRoot(container!);
root.render(<Index />);
