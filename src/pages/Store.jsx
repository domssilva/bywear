import React from 'react';

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Store = (props) => {

    const {
        merch,
        cart,
        setCart,
        total,
        setTotal,
        editProductQtd,
        removeProduct,
    } = props;

    return (
        <div className="container">
            <Shop merch={merch} cart={cart} setCart={setCart}/>
            <Navigation 
                cart={cart} 
                total={total} 
                setTotal={setTotal} 
                merch={merch} 
                setCart={setCart}
                editProductQtd={editProductQtd}
                removeProduct={removeProduct}
            />
        </div>
    );
}

export default Store;