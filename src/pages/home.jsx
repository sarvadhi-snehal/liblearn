import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom"
function home({onlogin}) {
    const history = useHistory();
  const responseGoogle = () => {
    history.push({
      pathname:'/'
  });

    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };
  return (
    <div>
      <GoogleLogout
        clientId="962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      ></GoogleLogout>
    </div>
  );
}

export default home;
