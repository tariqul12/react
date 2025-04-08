import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import Count from '../Count';
import './style.css';

const Home = ({name, age, address}) => {
    // console.log(this.props);
  return (
    <div className="home">
      <h1>Welcome to React</h1>
      <p>My Name Is {name}. I am {age} years old. I live in {address}</p>
      <Avatar src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={100} width={100} />
      <Avatar src="https://i.ibb.co.com/MkJsW0QW/Untitled-design-2025-03-17-T121801-887.png" height={100} width={100} />
      <Count /> 
      <Link to="/about">About</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      <Link to="/profile">Profile</Link> <br />
      {/* <p>Programer List:</p>
      <h3>Alamin</h3>
      <Skills />
      <h3>Tariqul</h3>
      <Skills />
      <h3>Sakir</h3>
      <Skills /> */}
    </div>
  );
};

export default Home;