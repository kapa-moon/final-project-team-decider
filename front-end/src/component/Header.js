import React from 'react';
import {NavLink} from 'react-router-dom';

function Header()
{
  return (
    <header className = 'App_header'> 
      <li>
        <button className = 'nav_item' style = {{border: '0px', backgroundColor: '#222222'}}><NavLink to = ''>Home</NavLink></button>
        <button className = 'nav_item' style = {{border: '0px', backgroundColor: '#222222'}}><NavLink to = ''>Recommendations</NavLink></button>
        <button className = 'nav_item' style = {{border: '0px', backgroundColor: '#222222'}}><NavLink to = ''>Selected Lists</NavLink></button>
      </li>
    </header>
  );
}

export default Header;