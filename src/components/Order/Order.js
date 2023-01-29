import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Order = () => {
    const {products, initialCart} = useLoaderData();
    const [carts, setCarts] = useState(initialCart)

    // remove order item
    const handleRemoveItem = (id) => {
        const remaining = carts.filter(product => product.id !== id);
        setCarts(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    carts.map(product => <OrderReview 
                        key={product.id} 
                        product={product} 
                        handleRemoveItem={handleRemoveItem}>

                        </OrderReview>)
                }
            </div>
            <div className='cart-container'>
                <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Order;