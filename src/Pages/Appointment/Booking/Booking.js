import { Grid } from '@mui/material';
import React from 'react';

const Booking = ({booking}) => {
    const {name,date,space} = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <h2>This is Booking</h2>
        </Grid>
    );
};

export default Booking;