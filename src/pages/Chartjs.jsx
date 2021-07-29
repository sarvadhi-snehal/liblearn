import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import Charts from "../Componets/Chats/Charts";

import Navbar from "../Componets/Navbar/Navbar";

function Chartjs() {
  const state = useSelector((state) => state);
  const history = useHistory();

  return (
    <div className="row  px-5 m-auto">
    {(state.isLogin===true)?
    <>
       <Navbar />
       <Charts />
    </>  : <Redirect to={{
      pathname:'/'
    }}/>
  }
       
    </div>
  );
}

export default Chartjs;
