import React from 'react';
import {Link} from 'react-router-dom';

import HeaderNav from './HeaderNav';
import icons from '../assets/imgs/icons.svg';

const Header = () => {
  return (
    <>
    <section className='content'>
    <HeaderNav/>
    <div className='header__content'>

      <section className='header__social'>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-twitter`}/>
          </svg>
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-instagram`}/>
          </svg>
        </a>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-facebook`}/>
          </svg>
        </a>
      </section>
      <Link className='header__btn' to='/store'>Explore</Link>
      <section className='header__main'>
        <h1 className='header__title'>
          <span className='orange'>Streetwear</span>
          <br/>
          <span className='white'>guide</span>
          <span className='orange'>20'</span>
        </h1>
        <p className='header__text'>
          Your personal guidebook for summer 2020 &minus; bywear styles that are truly lit and bring in the heat in the lit.
        </p>
      </section>
    </div>

  </section>
  </>
  );
}
 
export default Header;