import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom"
import {useDispatch} from "react-redux";
import { logOut} from '../../redux/actions'
function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();
  const responseGoogle = () => {
    dispatch(logOut());
    history.push({
      pathname:'/'
  });
  };
  return (
    <>
      <GoogleLogout
        clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      ></GoogleLogout>
    </>
  );
}

export default Logout;
