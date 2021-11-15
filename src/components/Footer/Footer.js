import React from 'react';
import Nav from '../Navigation/Nav'
import { Link } from 'react-router-dom';
import './footer.scss';
import '../Header/header.scss';

function Footer() {
   return (
      <footer role='contentinfo'>
         <section className='container container__footer'>
            <div className='footer__inner'>
               <div><Link to='/' className='logo-link' ><img src="../../img/logo.jpg" alt='На главную' /></Link></div>
               <Nav />
            </div>
            <div className='footer__copyright'>Copyright © 2018 Toxin отель. Все права защищены.</div>
         </section>
      </footer>

   )
}

export default Footer;