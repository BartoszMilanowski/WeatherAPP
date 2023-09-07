import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Login } from './Login';
import reportWebVitals from './reportWebVitals';
import './style.css';
import { Register } from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
  </BrowserRouter>
);
reportWebVitals();
