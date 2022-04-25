import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Landing } from './views/Landing';

const state = {
  start: false,
}

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
);

