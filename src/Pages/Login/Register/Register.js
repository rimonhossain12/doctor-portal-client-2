import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';


const Register = () => {
    const [loginData, setLoginDate] = useState({});
    const history = useHistory();
    

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginDate(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {
                        !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Your password"
                                // name
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                label="Re Type Your password"
                                // name
                                variant="standard"
                            />

                            <Button type="submit" sx={{ width: '75%', m: 1 }} variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="text">Already Register? Please Login</Button>
                            </NavLink>
                        </form>
                    }

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;