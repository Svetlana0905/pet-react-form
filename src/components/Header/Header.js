import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Navigation/Nav'
import './header.scss';

function Header() {
   return (
      <header className='header'>
         <section className='container'>
            <div><Link to='/pet-react-form/' className='logo-link' ><img src="../../img/logo.jpg" alt='На главную' /></Link></div>
            <Nav />
         </section>
      </header>
   )
}

export default Header;