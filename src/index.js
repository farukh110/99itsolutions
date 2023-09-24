import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/scss/main.scss';
import './assets/scss/style.scss';
import './assets/scss/style2.scss';
import './assets/scss/d_flaticon.scss';
import 'antd/dist/reset.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>
);
