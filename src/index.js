import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootNode = document.getElementById("root");
createRoot(rootNode).render(
  <React.StrictMode>
    <App tab="home"/>
  </React.StrictMode>
);
