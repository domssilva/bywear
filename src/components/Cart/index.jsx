import React from 'react';
import {Link} from 'react-router-dom';

import CartProduct from '../CartProduct';
import Backdrop from '../Backdrop/';

import './styles.scss';

const Cart = (props) => {

    const {
        cart,
        setCart,
        total,
        merch,
        emptyCart,
        editProductQtd,
        removeProduct,
    } = props;

    const getRandomNumber = () => Math.floor(Math.random() * 10000);

    let cartItems = [];
    for (let numericId in cart) {
        merch.forEach(product => {
            if (product.id === numericId) {
                cartItems.push(product);
            }
        });
    }

    return (
        <>
            <nav className='navigation__nav cart__nav' id='cart' role='navigation'>
                <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
                <div className="cart__container">
                    <div className="cart__product-container">
                        {
                            cartItems.map(productObj => (
                                <CartProduct 
                                    key={`${productObj.id}-${getRandomNumber()}`}
                                    props={props} 
                                    cart={cart}
                                    setCart={setCart}
                                    product={productObj}
                                    editProductQtd={editProductQtd}
                                    removeProduct={removeProduct}
                                />
                            ))
                        }
                    </div>
                    <div className="cart__action">
                        {
                        (total > 0) ? (
                            <>
                            <div className="cart__action-btns">
                                <Link className="btn" to="/checkout">
                                    Buy
                                </Link>
                                <button 
                                    className="cart__action-erase btn"
                                    onClick={() => {emptyCart()}}
                                >
                                    empty cart
                                </button>
                            </div>
                            <span className="cart__action-total">€ {parseFloat(total).toFixed(2)}</span>
                            </>
                        ) : 'empty cart'
                        }
                    </div>
                </div>
            </nav>
            <Backdrop/>
        </>
    );
}

export default Cart;
