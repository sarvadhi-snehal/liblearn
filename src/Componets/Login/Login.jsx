import React from "react";
import Navbar from "../Navbar/Navbar";
import GoogleSignin from "./GoogleLogin";
import LoginForm from "./LoginForm";
import Fade from 'react-reveal/Fade';

function Login() {
  return (
    <Fade top>
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-between flex-column  vh-100 ">
    
      <Navbar />
      <div className="mb-auto mt-5 pt-5  w-75">
        <p>Welcome</p>
        <LoginForm />
        <p className="mt-5">Or</p>
        <GoogleSignin />
      </div>
    </div>
    </Fade>
  );
}

export default Login;
