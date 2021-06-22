import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerList from './pages/customers/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CustomerList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
