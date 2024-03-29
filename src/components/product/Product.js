import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css';

const Product = (props) => {
    const {name, img, price, ratings, seller} = props.product;
    // click

    return (
        <div className='product' style={{height:"510px"}}>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p ><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} Stars</small></p>
            </div>
            <button onClick={() =>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;