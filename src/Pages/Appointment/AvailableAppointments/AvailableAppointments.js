import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        date: "8:00 AM - 9:00 AM",
        space: 10
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        date: "10:05 AM - 11:30 AM",
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        date: "5:00 AM - 6:30 AM",
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        date: "7:00 AM - 8:30 AM",
        space: 10
    },
    {
        id: 5,
        name: "Pediatric Dental",
        date: "06:00 AM - 07:00 AM",
        space: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        date: "07:00 AM - 08:00 AM",
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <Typography variant="h6" sx={{ color: 'info.main',mb:2 }}>
                <h2>Available Appointment on {date.toDateString()}</h2>
            </Typography>
            
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        keys={booking.id}
                        booking={booking}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;