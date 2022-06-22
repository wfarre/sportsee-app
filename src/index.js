import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <BrowserRouter>
    <Routes>
      <Route path="/user/:id" element={<App />}/>
    {/* <Route path="/yoga" element={<Yoga />}/>
    <Route path="/swimming" element={<Swimming />}/>
    <Route path="/cycling" element={<Cycling />} /> */}

    </Routes>
    
  </BrowserRouter>
);

