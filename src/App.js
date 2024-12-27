import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Routing from './Routing';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Routing/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;