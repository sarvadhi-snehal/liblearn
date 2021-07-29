import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom"
import {useDispatch} from "react-redux";
import { logOut} from '../../redux/actions'
import { FiLogOut} from 'react-icons/Fi'
import './Logout.scss'
function Logout() {
    let clientId = import.meta.env.client_id
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
        clientId={clientId}
        render={renderProps => (
            <p onClick={renderProps.onClick} 
                disabled={renderProps.disabled}
                className=" btnOut m-3"
                > <FiLogOut /> log out</p>
          )}
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      ></GoogleLogout>
    </>
  );
}

export default Logout;
