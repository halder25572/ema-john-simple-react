import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const { length } = props.carts;
    const {carts} = props;
	// console.log(carts);
   
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of carts){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    let tax = parseFloat((total * 0.1).toFixed(2));

    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
        </div>
    );
};

export default Cart;