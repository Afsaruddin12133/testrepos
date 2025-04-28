import React from 'react';
import Navbar from './coponent/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './coponent/Authentication/Login';
import Home from './coponent/Home';


function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
    
  );
}

export default App;
