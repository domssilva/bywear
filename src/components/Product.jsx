import React from 'react';
import icons from '../assets/imgs/icons.svg';

import * as fx from './Functions';

const Product = (props) => {

    const {
        name,
        img,
        price, 
        rating, 
        id, 
        description,
        cart,
        setCart
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let selectedRadio = event.target.querySelector("input[name='size']:checked");
        let productId = selectedRadio.id.split('-')[0].replace('#', '');
        //let productSize = selectedRadio.value;

        cart[productId] === undefined ?
        cart[productId] = 1 
        : (
            cart[productId] += 1
        );

        setCart({...cart});
    }

    return (
    <div className="product__container">
        <div className="product__cta">
            <img className="product__cta-img" src={img} alt="clothes"/>
            <div className="product__cta-price">{price} €</div>
        </div>
        <div className="product__info">
            <div className="product__info-top">
                <h3 className="product__info-name">{name}</h3>
                <div className="product__info-rating" title="media delle ricensioni">
                    {
                        Array(rating).fill('x').map(num => 
                            <svg key={fx.getRandomNumber()} className='header__social-icon'>
                            <use xlinkHref={`${icons}#icon-star-full`}/>
                            </svg>
                        )
                    }
                </div>
                <p className="product__info-about">
                    {description}
                </p>
            </div>
            <form 
                id={`form-${id}`}
                className="product__info-bottom"
                onSubmit={handleSubmit}
            >
                <div className="product__info-input">
                    <input 
                        className="product__info-input-radio" 
                        type="radio" 
                        id={`#${id}-xs`} 
                        value="xs" 
                        name="size"
                    />
                    <label 
                        htmlFor={`#${id}-xs`} 
                        className="product__info-input-label"
                    >
                        xs
                    </label>
                    
                    <input 
                        className="product__info-input-radio" 
                        type="radio" 
                        id={`#${id}-s`} 
                        value="s" 
                        name="size"
                    />
                    <label 
                        htmlFor={`#${id}-s`} 
                        className="product__info-input-label"
                    >
                        s
                    </label>
                    
                    <input 
                        className="product__info-input-radio" 
                        type="radio" 
                        id={`#${id}-m`} 
                        value="m" 
                        name="size" 
                        defaultChecked="true"
                    />
                    <label 
                        htmlFor={`#${id}-m`} 
                        className="product__info-input-label"
                    >
                        m
                    </label>
                    
                    <input 
                        className="product__info-input-radio" 
                        type="radio" 
                        id={`#${id}-l`} 
                        value="l" 
                        name="size"
                    />
                    <label 
                        htmlFor={`#${id}-l`} 
                        className="product__info-input-label"
                    >
                        l
                    </label>

                    <input 
                        className="product__info-input-radio" 
                        type="radio" 
                        id={`#${id}-xl`} 
                        value="xl" 
                        name="size"
                    />
                    <label 
                        htmlFor={`#${id}-xl`} 
                        className="product__info-input-label">
                        xl
                    </label>
                </div>

                <input 
                    className="product__cta-submit btn" 
                    type="submit" 
                    value="aggiungi al carrello"
                />
            </form>
        </div>
    </div>
    )
}

export default Product;
