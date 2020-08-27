import React from 'react';

import Navigation from '../../components/Navigation';

import './styles.scss';

const Checkout = (props) => {

    const {
        merch,
        cart,
        setCart,
        total,
        setTotal,
        editProductQtd,
        removeProduct,
    } = props; 

    const verifyData = (event) => {
        event.preventDefault();
        console.log('verifying data...');
    }

    return (
        <div className="container">
            <section className='content checkout'>
                <form 
                    className="checkout__form"
                    onSubmit={verifyData}

                >
                    <p className="checkout__total">total: {parseFloat(total).toFixed(2)}</p>
                    <img className="checkout__payment-img" src="https://cdn.shopify.com/s/files/1/0994/4836/files/creditcardicons.png?6051909690617246086" alt="payment methods"/>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                    
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname"/>

                    <label htmlFor="address">Address</label>
                    <input type="text" id="address"/>

                    <label htmlFor="mobile">Phone</label>
                    <input type="text" id="mobile"/>

                    <fieldset>
                        <input type="submit" className="btn" value="BUY"/>
                        <br/>
                        <small>
                            * No payment will be executed
                        </small>
                    </fieldset>
                </form>
            </section>
            <Navigation 
                cart={cart} 
                setCart={setCart}
                total={total} 
                setTotal={setTotal} 
                merch={merch} 
                editProductQtd={editProductQtd}
                removeProduct={removeProduct}
            />
        </div>
    )
}

export default Checkout;
