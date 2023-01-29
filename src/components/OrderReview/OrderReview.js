import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css';

const OrderReview = ({product, handleRemoveItem}) => {
    const {id, name, price, quantity, img} = product;
    return (
        <div className='order-review'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-detail">
                    <p>{name}</p>
                    <p>Price: <small>{price}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon onClick={() => handleRemoveItem(id)} className='delete-item' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default OrderReview;