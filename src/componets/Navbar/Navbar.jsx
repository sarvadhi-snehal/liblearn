import React from "react";
import Logout from "../Logout/Logout";
import { useSelector,useDispatch } from "react-redux";
import {darkMode} from '../../redux/actions';
import './Navbar.scss'
function Navbar() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state.isLogin)
  return (
    <nav className="d-flex align-items-center justify-content-between px-3 w-100 cursor-pointer ">
      <div className="logo  d-flex align-items-center justify-content-evenly">
        <h5 className="text-dark fw-bolder p-3">Demo<span className="text-danger fw-900">.</span></h5>
     
      </div>
      <div className="d-flex align-items-center  justify-content-between px-3  " data-toggle="tooltip">
      <div onClick={()=> dispatch(darkMode())} className="theme position-relative  me-3 "> 
        <h6 className={`toggleTheme position-absolute ${state.isDark && 'PositionLeft'}`}></h6>
        </div>
        {state.isLogin && <Logout />}
        <p className="text-primary pt-3">English</p>
      </div>
    </nav>
  );
}

export default Navbar;
