import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Component as Data } from './core/data';

import { client } from './grpc';
// import './index.scss';

console.log('client', client);

const root = document.getElementById('root');
const component = (
  <Data>
    <App />
  </Data>
);

ReactDOM.render(component, root);
