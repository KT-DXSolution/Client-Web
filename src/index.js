import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';

import App from './App';
import './index.css';

const persistor = persistStore(store);
const rootNode = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App tab="home"/>
      </React.StrictMode>
    </PersistGate>
  </Provider>
  ,rootNode)