import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustomProvider from './ContextAPI/Context'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProvider>
  <App />
  </CustomProvider>
    
);

reportWebVitals();
