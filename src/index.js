import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './pages/practice'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //严格模式检查仅在开发模式下运行；它们不会影响生产构建。
  <React.StrictMode>
    <HelloMessage name='John'/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
