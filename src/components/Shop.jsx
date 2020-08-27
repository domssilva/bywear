import React, {useState, useEffect} from 'react';

import HeaderShop from './HeaderShop';
import Product from './Product';

const Shop = (props) => {

    const [filters, setFilters] = useState('');

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    let results;

    if (filters === '') {
        results = props.merch.map(({name, img, price, rating, id, description}) => (
            <Product 
                key={id}
                name={name} 
                img={img} 
                id={id}
                rating={rating}
                price={price}
                description={description}
                cart={props.cart}
                setCart={props.setCart}
            />
        ));
    } else {
        results = props.merch.map(({name, img, price, rating, id, description, category}) => {
            if (category === filters) {
                return (
                    <Product 
                        key={id}
                        name={name} 
                        img={img} 
                        id={id}
                        rating={rating}
                        price={price}
                        description={description}
                        cart={props.cart}
                        setCart={props.setCart}
                    />
                )
            }
        });
    }

    return (
        <section className='content content-store'>
            <HeaderShop
                setFilters={setFilters}
            />
            <div className="content-store__cell">
                { results }
            </div>
        </section >
    )
}

export default Shop;
