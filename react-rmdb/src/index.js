import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Render App.js
 * Send To #root in public index.html
 */
ReactDOM.render(
  // StrictMode is a tool for highlighting potential problems in an application. 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // JSX element to get location of App.js to go after render
);
