import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginPic from '../../../Pottery/loginPic.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, googleSignIn } = useAuth()

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn(location, navigate)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography sx={{ mt: 5 }} variant="h4" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name='email'
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            name='password'
                            onChange={handleOnChange}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button type='submit' variant='contained' sx={{ width: '25%', justifyContent: 'center', display: 'flex' }}>
                            Login
                        </Button>
                        <br />
                        <NavLink
                            to="/register"
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    <h4>Or</h4>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginPic} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;