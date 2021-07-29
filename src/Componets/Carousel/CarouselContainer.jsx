import React from "react";
import { Carousel } from "react-bootstrap";
import Info from "../Info/Info";
import {useSelector} from "react-redux";
import Fade from 'react-reveal/Fade';
import './overlay.scss'
function CarouselContainer() {
  const state = useSelector(state => state.isDark)
  return (
    <div className={`col-sm-12 col-md-6 col-lg-6 text-left  vh-100 position-relative ${state && 'carousel-container' } `}>
      <Info />
      <Fade bottom>
      <Carousel fade  className="w-100" slide={true} controls={false} indicators={false} touch={true}>
        
        <Carousel.Item className="position-relative" interval={300}>
      <div className="overlay "></div>
          
            <img
              className="d-block w-100 vh-100  "
              src="https://picsum.photos/1004"
              alt=""
            />
         
          
        </Carousel.Item>
        <Carousel.Item className="text-left position-relative" interval={400}>
      <div className="overlay"></div>
        
            <img
              className="d-block w-100 vh-100 "
              src="https://picsum.photos/1003"
              alt=""
            />
     
         
        </Carousel.Item>
        <Carousel.Item className="position-relative" interval={500}>
      <div className="overlay"></div>
        
            <img
              className="d-block w-100 vh-100 "
              src="https://picsum.photos/1006 "
              alt=""
            />
      
      </Carousel.Item>
      </Carousel>
      </Fade>
    </div>
  );
}

export default CarouselContainer;
