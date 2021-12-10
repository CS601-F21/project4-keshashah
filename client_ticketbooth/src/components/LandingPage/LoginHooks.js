import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './../Reusables/refreshToken';
// refresh token
import GoogleLogo from '../../images/google.svg';
import {loginUser} from '../../state/action-creators/eventAction.js';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  Button } from '@material-ui/core';


const clientId =
  '711873756611-gknk8gavn8q99492ek7tu4ggp35s65np.apps.googleusercontent.com';

function LoginHooks() {
  const history = useHistory();
  
  const dispatch = useDispatch();


  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Welcome ${res.profileObj.name} 😍. \n Email: ${res.profileObj.email} `
    );
    refreshTokenSetup(res);
    dispatch(loginUser(res.profileObj.name, res.profileObj.email, history));
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    // <button onClick={signIn} className="button">
    //   <img  src={GoogleLogo} alt="google login" className="icon"></img>
    //   <span className="buttonText">Sign in with Google</span>
    // </button>

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
          onClick={(e) => { signIn(e); }}
      >
          Sign in with Google
    </Button> 
  );
}

export default LoginHooks;