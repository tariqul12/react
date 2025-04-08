import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact/index.jsx';
import Home from './components/home';
import Profile from './components/Profile/index.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home name="Tariqul" age="25" address="Dhaka" /> } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact name="tariqul" />} />
        <Route path='/profile' element={<Profile name="tariqul" />} />
      </Routes>
    </Router>
  );
}

export default App;
