import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBackground = {
    background: `url(${bg})`,

}

/* 
    app.get('/users/:email', async (req, res) => {
    const id = req.params.email;
    const email = { email:email };
    const cursor = await usersCollection.find(email);
    const orders = await cursor.toArray();
    res.send(orders);
    })

    useEffect(() => {
    const url = `https://intense-sands-68262.herokuapp.com/users/${email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    }, []);
    */

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    // border:'1px solid red'
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBackground} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 400 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit inventore, doloribus voluptatibus vel similique assumenda.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#8CE6E8' }}>GET Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter} >
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;