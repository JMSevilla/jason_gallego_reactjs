import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import ApplicationStart from './router/index'
const rootElement = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <ApplicationStart />
  </HashRouter>,
  rootElement
)

