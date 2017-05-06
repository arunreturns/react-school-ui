import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'whatwg-fetch';

ReactDOM.render(
  <App
    baseUrl={"https://java-arunreturns-1.c9users.io/school"}
  />,
  document.getElementById('root')
);
