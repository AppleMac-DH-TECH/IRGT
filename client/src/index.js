import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div className='flex flex-col h-screen justify-between overflow-auto bg-gradient-to-r bg-[rgba(255,152,9,0.85)] via-[rgba(255,152,9,0.9)] to-[rgba(255,152,9,0.99)]'>
      <App />
    </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
