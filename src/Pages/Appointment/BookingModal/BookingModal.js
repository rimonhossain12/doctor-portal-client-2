import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;
    const {user} = useAuth();

    const handleBookingSubmit = e => {
        alert('submitting');
        // collected data from send to date server
        handleBookingClose();
        e.preventDefault();
    }

    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        disabled
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={user.email}
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue="phone Number"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button type="submit" variant="contained">Submit</Button>

                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;