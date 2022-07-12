import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../images/Screenshot_4.pngnew djaopsdfp.png.png'
import useAuth from '../../Hooks/UseAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});

  const {user,logOut , loginUser ,isLoading , authError} = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value, field)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email , loginData.password)
        e.preventDefault();
    }

   
    return (
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '20%', m: 1 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">Sign up</Button>
                    </NavLink>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/Dashboard">
                        <Button variant="text">Dashboard</Button>
                    </NavLink>
                    {isLoading && <CircularProgress></CircularProgress> }
                {user?.email && <Alert severity='success'>user creted successfully!</Alert>}
                {
                    authError && <Alert severity='error'>{authError}</Alert> 
                }
                </form>
                <p>------------------------</p>
         
            </Grid>

              {user?.email ?   <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button  onClick={logOut} variant="text">LogOut</Button>
                    </NavLink> : 
                      <NavLink
                      style={{ textDecoration: 'none' }}
                      to="/login">
                      <Button variant="text">login</Button>
                  </NavLink> }
        </Grid>
    </Container>
    );
};

export default Login;