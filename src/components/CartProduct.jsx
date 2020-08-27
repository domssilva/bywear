import React from 'react'

const CartProduct = (props) => {

    const {
        cart,
        product,
        editProductQtd,
        removeProduct,
    } = props;

    const {
        id,
        img,
        name,
        price,
    } = product;

    return (
        <div className="cart__product">
            <div className="cart__product-main flex">
            <button 
                className="x-red"
                onClick={() => {removeProduct(id)}}
            >
                X
            </button>
                <img className="cart__product-img" src={img} alt="cart product"/>
                <p className="cart__product-name"> {name} </p>
                <div className="cart__product-qtd">
                    <span 
                        onClick={() => editProductQtd(id, '-')}
                        className="cart__product-qtd-less btn"
                    > 
                        - 
                    </span>
                    <span className="cart__product-qtd-size">
                        {cart[id]}
                    </span>
                    <span 
                        onClick={() => editProductQtd(id)}
                        className="cart__product-qtd-less btn"
                    > 
                        +
                    </span>
                </div>
            </div>
            <p className="cart__product-price">€ {price}/unit</p>
        </div>
    );
}

export default CartProduct;
