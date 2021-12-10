import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/ticket2.svg';
import {
  Grid,
  Avatar
} from '@material-ui/core';
import './../style.css';
import LoginHooks from './LoginHooks.js';

// https://sivanesh-s.github.io/react-google-authentication/

// CSS styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: 'white',
    // padding: '20px',
    // margin: '10px',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
        <div className="login">
          
            <Grid className={classes.wrapper}>
            
            <h1>Easy SignIn/SignUp: </h1>

            
                <LoginHooks/>
               
                <br/>      <br/>      <br/>      <br/>
                      
                <h2> <u>We Offer </u></h2>
                <h3> Create and Market Your Event </h3>
                <h3> Search for Other Events </h3>
                <h3> Purchase Tickets for Upcoming Events </h3>
                <h3> Transfer Tickets to Other Users </h3>
                
                <Avatar style={{display: 'blue',
                margin: '0 auto',
                marginBottom: '4rem',
                width: '50%',
                height: '50%'
                }} src={logo} alt='Kesha Shah' />
                
        
            </Grid>
          
      

          </div>
    </div>
  );
};

export default Login;