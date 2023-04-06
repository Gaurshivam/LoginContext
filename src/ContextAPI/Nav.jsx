import React from 'react';
import './Nav.css'
import { useContext } from 'react';
import { myContext } from './Context';

const Nav = () => {

  const {setIsloggedIn} =useContext(myContext)
  return (
    <div className='nav'>
      <div className='title'>
        <h2>React Context</h2>
      </div>
      <div className='menu'>
        <a href="./Nav.jsx">Home</a>
        <a href="./Nav.jsx">Profile</a>
        <a href="./Nav.jsx">Product</a>
        <a href="./Nav.jsx">Support</a>
        <button onClick={()=>{setIsloggedIn(false)}}>Logout</button>
        <span style={{color:"Yellow",marginLeft:"20px",fontSize:"22px"}}><b>Shivam</b></span>
      </div>
    </div>
  );
}

export default Nav;
