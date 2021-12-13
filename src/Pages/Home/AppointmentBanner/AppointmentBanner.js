import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Container } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
           <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'start' }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#8CE6E8' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 400 }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vero laudantium inventore facilis aperiam, quia dolorum asperiores unde aliquid soluta.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#8CE6E8' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
           </Container>
        </Box>
    );
};

export default AppointmentBanner;