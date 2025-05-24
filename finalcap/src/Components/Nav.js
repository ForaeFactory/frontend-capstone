import React from 'react';
import Logo from '../Images/Logo.svg';
import '../Styles/Nav.css';


function Nav() {
  return (
    <nav className='nav'>
        <img id="ll-logo" src={Logo} alt="Little Lemon Logo"></img>
        <ul>
          <li><a href='#/Home'>Home</a></li>
          <li><a href='#/About'>About</a></li>
          <li><a href='#/Menu'>Menu</a></li>
          <li><a href='#/Reservations'>Reservations</a></li>
          <li><a href='#/Order-Online'>Order Online</a></li>
          <li><a href='#/Login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav
