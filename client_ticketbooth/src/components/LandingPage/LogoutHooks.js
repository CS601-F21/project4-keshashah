import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import {  Button } from '@material-ui/core';
import GoogleLogo from '../../images/google.svg';
import { useHistory } from 'react-router-dom';

const clientId =
  '711873756611-gknk8gavn8q99492ek7tu4ggp35s65np.apps.googleusercontent.com';

function LogoutHooks() {
   const history = useHistory();
  
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    history.push("/");
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    // <button onClick={signOut} className="button">
    //   <img src="icons/google.svg" alt="google login" className="icon"></img>

    //   <span className="buttonText">Sign out</span>
    // </button>
    <div>
        
        <Button
        variant="outlined"
        fullWidth
        style={{backgroundColor: "#fff"}}
        // startIcon={(
        // <img
        //     src={GoogleLogo}
        //     width="25px"
        //     style={{ position: 'absolute', left: 10, top: 7 }}
        //     alt="Google Logo"
        // />
        // )}
        onClick={(e) => { signOut(e); }}
        >
        SignOut
        </Button> 
    </div>
  );
}

export default LogoutHooks;