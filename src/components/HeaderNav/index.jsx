import React from 'react'

import { Link } from 'react-router-dom';

export default function HeaderNav() {
    return (
    <header className='header'>
      <div className='header__top'>
        <Link to='/' className='header__logo'>
          bywear
        </Link>
        {/*<input type='search' className='header__search' placeholder='search'/>*/}
      </div>
    </header>
    );
}
