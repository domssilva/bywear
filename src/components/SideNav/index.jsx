import React from 'react';
import {Link} from 'react-router-dom';

import Backdrop from '../Backdrop/';

const SideNav = () => (
  <>
    <Backdrop/>
    <nav className='navigation__nav' id='menu' role='navigation'>
      <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
      <Link to='/' className='navigation__link'>home</Link>
      <Link to='/store' className='navigation__link'>shop</Link>
      <Link to='/location' className='navigation__link'>map</Link>
    </nav>
  </>
);

export default SideNav;
