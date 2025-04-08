import React from 'react';
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
      <Avatar src="https://media-hosting.imagekit.io/5c27d4b5ed8c4af6/Screenshot_41.png?Expires=1838617342&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UgOuCntS6PEYwnB53sJO4ovS2NL90cvaGtGLbp3ncie~C6nL2zEiD2RdzIKmuSsQl8uprBPaFzvAgthgIcz52Aw45bPk8eEoHkMsTj01j49E7SievNuL9W~t5F3TRry7nxn0JXZ9LvT9ASGrVK-txwwxOM6xq3sElSmnsF1Kf9x~pE6nq2s0cSTm9ZVEye9pF6yJ9M7tGN2YkH8dyecA9Gf0bgdvMZ42ixkw1WKf0NILc7KdQU--YI6X6sMkpteWktvtqo5vcPR~Af9aSEPAE~1iuLlfzQ2Xf6osFv8-lbO60sVKKxM8TLALeUJoNamvCythTrY~X7GNYffrW4ZTgg__" height={100} width={100} />
      <Count />
    </div>
  );
};

export default Home;