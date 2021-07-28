import React from "react";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";

function Navbar() {
  const state = useSelector(state => state.isLogin);
  console.log(state)
  return (
    <nav className="d-flex align-items-center justify-content-between px-3 pt-3 w-100 ">
      <div className="logo">
        <h5 className="text-dark fw-bolder">Demo<span className="text-danger fw-900">.</span></h5>
      </div>
      <div className="d-flex align-items-center justify-content-between ">
        {state && <Logout />}
        <p className={`text-primary ${state && "ms-3"}`}>English</p>
      </div>
    </nav>
  );
}

export default Navbar;
