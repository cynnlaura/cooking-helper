import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import LiquidOunces from './LiquidOunces';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liquidounces" element={<LiquidOunces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
