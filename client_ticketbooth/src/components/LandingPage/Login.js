import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLogo from '../../images/google.svg';
import logo from '../../images/ticket2.svg';
import {
  Grid,
  Avatar,
  Button,
} from '@material-ui/core';
import './../style.css';
import {loginUser} from '../../state/action-creators/eventAction.js';

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

  const history = useHistory();
  
  const dispatch = useDispatch();

  const onLoginButtonClick = () => {
    dispatch(loginUser(history));
   // history.push('/AllEvents');
  };

  
  return (
    <div>
        <div className="login">
          
           
            <Grid className={classes.wrapper}>
            
            <h1>Easy SignIn/SignUp: </h1>

            <Button
                  variant="outlined"
                  fullWidth
                  startIcon={(
                    <img
                      src={GoogleLogo}
                      width="20px"
                      style={{ position: 'absolute', left: 10, top: 7 }}
                      alt="Google Logo"
                    />
                  )}
                  onClick={(e) => { onLoginButtonClick(e); }}
             >
                  Sign in with Google
                </Button>
               
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