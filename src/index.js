import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Contact';
import Projects from './Projects';
import {BrowserRouter} from "react-router-dom";
import { Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}> Home </Route>
        <Route path='/contact' element={<Contact/>}> Contact Me </Route>
        <Route path='/work' element={<Projects/>}> Projects </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
