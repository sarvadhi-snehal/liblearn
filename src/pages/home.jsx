import React from "react";
import Login from "../Componets/Login/Login";
import CarouselContainer from "../Componets/Carousel/CarouselContainer";
function home() {
  return (
    <>
      <div className="row d-flex  ">
        <Login />

        <CarouselContainer />
      </div>
    </>
  );
}

export default home;
