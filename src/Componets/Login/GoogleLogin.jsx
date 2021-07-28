import React from "react";
import GoogleLogin from "react-google-login";
import {useDispatch} from "react-redux";
import { logIn} from '../../redux/actions'
import { useHistory} from 'react-router-dom'

function GoogleSignin() {
  const history = useHistory();
const dispatch = useDispatch()
  const responseGoogle = (response) => {
    
    dispatch(logIn())
    history.push({
      pathname:'/chart'
    })
  };
  const responseGoogleError = (response) => {
    alert(`Something went wrong, login again`);
  };
  return (
    <>
      <GoogleLogin
        clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}

export default GoogleSignin;
