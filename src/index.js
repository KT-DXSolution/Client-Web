import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from 'store'

const rootNode = document.getElementById("root");
render(
  <Provider store={store}>
    <React.StrictMode>
      <App tab="home"/>
    </React.StrictMode>
  </Provider>
  ,rootNode)