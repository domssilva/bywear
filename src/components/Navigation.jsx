import React from 'react';
import {Link} from 'react-router-dom';

import SideNav from './SideNav';
import Cart from './Cart';
import icons from '../assets/imgs/icons.svg';

const Navigation = (props) => {

  const {
    cart,
    setCart,
    merch,
    total,
    setTotal,
    editProductQtd,
    removeProduct,
  } = props;

  const emptyCart = () => {
    setTotal(0);
    setCart({});
  }

  let cartQtd = 0;
  for (const [key, value] of Object.entries(cart)) {
    cartQtd += value;
  }

  return (
    <section className="navigation">
      <a href='#menu' className='navigation__anchor' title='menu'>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-list`}/>
        </svg>
      </a>

      <a href='#cart' className='navigation__cart' title='cart'>
        <div className={cartQtd >= 1 ? `cart-popup enabled` : 'cart-popup' }>
          {cartQtd}
        </div>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-cart`}/>
        </svg>
      </a>

      <Link to='/checkout' className='navigation__card' title='buy'>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-credit-card`}/>
        </svg>
      </Link>

      <SideNav props={props}/>
      <Cart
        cart={cart}
        total={total}
        merch={merch}
        emptyCart={emptyCart}
        editProductQtd={editProductQtd}
        removeProduct={removeProduct}
      />
    </section>
  );
}
 
export default Navigation;