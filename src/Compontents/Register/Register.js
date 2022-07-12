import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../images/Screenshot_4.pngnew djaopsdfp.png.png'
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user , authError, registerUser ,isLoading } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field , value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        console.log('test');

        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email , loginData.password,loginData.name )
        console.log(registerUser);
        
        e.preventDefault();

    }
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
           
                <Typography variant="body1" gutterBottom>Sign UP</Typography>
                { !isLoading &&  <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Frist Name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Last Name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="ReType Your Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="text">Already Registered? Please Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress></CircularProgress> }
                {user?.email && <Alert severity='success'>user creted successfully!</Alert>}
                {
                    authError && <Alert severity='error'>{authError}</Alert> 
                }
               
            </Grid>
          
        </Grid>
    </Container>
    );
};

export default Register;