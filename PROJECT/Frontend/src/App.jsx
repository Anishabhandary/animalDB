import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Navbar from './Components/Navbar';
import Navbar from './layouts/Navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
// import Navbar2 from './Components/Navbar2';

function App() {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = 'Are you sure you want to leave?';
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Home/>]}></Route>
        <Route path='/visit' element={[<Navbar/>,<Home/>]}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App