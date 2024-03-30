// PayPalButton.js

import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { createPayPalOrder } from '../services/actionCreator';
import { toaster } from '../services/toaster';

const PayPalButton = ({ equipment, checkOutEquipment }) => {
    const style = { "layout": "vertical" };

    const createOrder = async () => {
        try {
            const response = await createPayPalOrder(equipment);
            return response.orderId;
        } catch (error) {
            console.error('Error creating PayPal order:', error);
            toaster(`'Error creating PayPal order:', ${error}`, "error")
            return null;
        }
    }

    const onApprove = (data) => {
        // Handle the approved payment
        checkOutEquipment(equipment)
    }

    return (
        <PayPalButtons
            style={style}
            createOrder={createOrder}
            onApprove={onApprove}
        />
    );
}

export default PayPalButton;
