import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId} = useParams()
    return (
        <div>
            <h2>Please Pay for: {appointmentId}</h2>
        </div>
    );
};

export default Payment;