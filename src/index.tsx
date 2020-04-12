import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Component as Data } from './core/data';

import './index.scss';

const root = document.getElementById('root');
const component = (
  <Data>
    <App />
  </Data>
);

ReactDOM.render(component, root);
