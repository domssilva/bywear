import React from 'react';

import HeaderNav from '../../components/HeaderNav';
import LeafletMap from '../../components/LeafletMap';
import Navigation from '../../components/Navigation';

import './styles.scss';

const Location = (props) => {

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
            <section className='content content-location'>
            <HeaderNav/>
            <section className='location'>
                <LeafletMap/>
                <div className="location__details">
                    <h3 className="location__address">
                        <span className="orange">street 123, AC 00</span>
                        <br/>
                        <span className="white">Come visit us!</span>
                    </h3>
                    <p className="location__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro optio quisquam libero quis soluta reiciendis.
                    </p>
                    <br/>
                    <p className="location__text location__text--highlight">
                        Monday &minus; Sunday
                        <br/>
                        9:00 &minus; 21:00
                    </p>
                </div>
            </section>
        </section>
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
    )
}

export default Location;
