import React from "react";
import { Carousel } from "react-bootstrap";
import Info from "../Info/Info";
import Pulse from "react-reveal/Pulse";
import Fade from 'react-reveal/Fade';
function CarouselContainer() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 text-left  vh-100  ">
      <Fade bottom>
      <Carousel fade={true} className="w-100">
        <Carousel.Item>
          
            <img
              className="d-block w-100 vh-100  "
              src="https://picsum.photos/1004"
              alt=""
            />
         
          <Carousel.Caption>
            <Info />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text-left">
        
            <img
              className="d-block w-100 vh-100 "
              src="https://picsum.photos/1003"
              alt=""
            />
     
          <Carousel.Caption>
            <Info />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        
            <img
              className="d-block w-100 vh-100 "
              src="https://picsum.photos/1006 "
              alt=""
            />
      
          <Carousel.Caption>
            <Info />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Fade>
    </div>
  );
}

export default CarouselContainer;
