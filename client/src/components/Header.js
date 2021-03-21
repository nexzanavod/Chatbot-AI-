 import React from 'react';
 import {Link} from 'react-router-dom';

 import "./Header.css";
 
 const Header = () => {
  return (
   <nav>
   <div className = "nav-wrapper">
      
      <Link to={'/'} className="brand-logo center">ChatBot</Link>

      <ul id="nav-mobile" className="right hide-on-med-and-down"></ul>

         <ul>
            <li><Link to = {'./shop'}>Shop</Link></li>
            <li><Link to = {'./about'}>About us</Link></li>
         </ul>
      
   </div>
   </nav>
  )
 }
 
 export default Header;