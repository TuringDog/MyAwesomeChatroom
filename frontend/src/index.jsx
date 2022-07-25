import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegister from './pages/loginRegister/loginRegister';
import HomePage from './pages/home/home';
import Page404 from './pages/404/page404';
import reportWebVitals from './reportWebVitals';

//import './index.css';


export default function Entrance(){

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginRegister />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Entrance />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
