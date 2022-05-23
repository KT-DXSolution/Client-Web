import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import './serviceworker.js'

const rootNode = document.getElementById("root");
render(
  <React.StrictMode>
    <App tab="home"/>
  </React.StrictMode>
  ,rootNode)