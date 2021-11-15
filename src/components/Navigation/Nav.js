import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

function Nav() {
   const setActive = ({ isActive }) => isActive ? 'nav__link-active nav__link' : 'nav__link';
   return (
      <nav role='navigation' className='nav'>
         <NavLink to='/pet-react-form/' className={setActive}>Home</NavLink>
         <NavLink to='/pet-react-form/about' className={setActive}>About</NavLink>
      </nav>
   )
}

export default Nav;