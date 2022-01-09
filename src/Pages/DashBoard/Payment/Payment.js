import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51KFIIFF1u8EcqLWYnl6Fp5WxxVQ10hDvql3MsfVqpmD8yGcqSmaxt9SFxCXw7bzKKJI7E91bco5CKHpxOwkygeB3009ZnjFbhF')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId]);

    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;


/* 
 1. install stripe and stripe react
 2. set publishable key
 3. Elements 
 4. CheckOut Form
----------
5. Create payment method
6.server create payment intent api
7. load client secret
8. confirmation payment
9.handle user error
*/