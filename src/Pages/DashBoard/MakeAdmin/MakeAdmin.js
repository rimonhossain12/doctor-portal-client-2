import React, { useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnSubmit = e => {
        const user = { email,token };
        console.log('token',user);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'               
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    // setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleOnSubmit}>
                <TextField sx={{ width: '50%' }} label="Email" variant="standard" type="email" onBlur={handleOnBlur} />
                <br />
                <Button sx={{ m: 1 }} type="Submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully!</Alert>}

        </div>
    );
};

export default MakeAdmin;