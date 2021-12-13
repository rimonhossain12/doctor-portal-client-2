import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';

/* 
phero help
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @mui/icons-material


*/

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item sx={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;  