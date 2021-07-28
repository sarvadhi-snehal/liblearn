import React from "react";
import  GoogleLogin  from "react-google-login";
import {useHistory} from "react-router-dom"
function Login({onlogin}) {
    const history = useHistory();
  const responseGoogle = (response) => {
 
    console.log(response);
    history.push({
        pathname:'/home',
        state: response
    });

  };

  const responseGoogleError = (response) => {
    alert(`click on login button to login again`)
  }
  return (
    <div>
      <GoogleLogin
        clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
