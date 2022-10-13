import React from 'react';
import {NavLink} from 'react-router-dom';

function Header()
{
  return (
    <header className = 'App_header'> 
      <li>
        <button className = 'header_nav_item'><NavLink to = ''>Home</NavLink></button>
        <button className = 'header_nav_item'><NavLink to = ''>Recommendations</NavLink></button>
        <button className = 'header_nav_item'><NavLink to = ''>Selected Lists</NavLink></button>
      </li>
    </header>
  );
}

export default Header;