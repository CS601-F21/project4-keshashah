import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import './../style.css';

// CSS styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: 'white',
    padding: '20px',
    margin: '10px',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
    },
  }
}));

const Login = () => {
  const classes = useStyles();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  
  const handleOnChangeUserId = (event) => {
    setUserId(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onLoginButtonClick = () => {
    history.push('/AllEvents');
  };

  return (
    <div>
        <div className="mainarea">
          <Grid className={classes.wrapper}>
            <h1>Login Page</h1>
            <TextField
              label='UserId'
              variant="outlined"
              fullWidth
              required
              value={userId}
              onChange={(e) => {
                handleOnChangeUserId(e);
              }}
              style={{margin:'20px auto', background:'white'}}
            />
            <TextField
              label='Password'
              variant="outlined"
              placeholder='Enter password'
              type='password'
              fullWidth
              required
              value={password}
              onChange={(e) => {
                handleOnChangePassword(e);
              }}
              style={{margin:'20px auto', background:'white'}}
            />
            
            <Button variant="contained"
                onClick={(e) => { onLoginButtonClick(e); }}>
                  Login
            </Button>

            {/* <a href="/Signup" className='loginAnchor'>New user? Register Here</a> */}
            </Grid>
          </div>
    </div>
  );
};

export default Login;