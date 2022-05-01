import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './module/index';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';

const rootNode = document.getElementById('root');

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
