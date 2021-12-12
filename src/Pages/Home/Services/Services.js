import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';


const services = [
    {
        name: "Fluoride Treatment",
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in ',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in ',
        img: cavity
    },
    {
        name: 'Teetch Whitening',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in ',
        img: whitening
    }
]


const Services = () => {
    return (
        <div>
            <Container>
                <Typography variant="h6" sx={{ fontWeight: 500, color: 'success.main',m:2}} component="div">
                   OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600,m:5}} variant="h4" component="div">
                   Service We Provide
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                       {
                           services.map(service=> <Service
                            key={service.name}
                            service={service}
                           ></Service>)
                       }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Services;