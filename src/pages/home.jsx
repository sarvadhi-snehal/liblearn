import React from "react";
import Login from "../Componets/Login/Login";
import CarouselContainer from "../Componets/Carousel/CarouselContainer";
import { useSelector } from "react-redux";
import { Redirect} from "react-router-dom"
 
function home() {
  const state = useSelector(state => state.isLogin)
 
 return(   <>
    {(state===false)?
     <div className="row d-flex ">
     <Login />

     <CarouselContainer />
   </div>:
     <Redirect to={{
      pathname:'/chart'
    }}/>
  }
     
    </>
  );
}

export default home;
