import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
