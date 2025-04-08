import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home name="Tariqul" age="25" address="Dhaka" /> } />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
