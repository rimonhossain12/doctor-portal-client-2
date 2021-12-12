import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';


const appointmentBg = {
    background:`url(${bg})`
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                    style={{width:400}}
                    src={doctor} alt="" />  
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">
                        Appointment
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;