import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.scss'
function CarouselContainer() {
  return (
    <>
      <Carousel >
        <Carousel.Item>
          <div className="img h-25">
          <img
            className="d-block img-fluid "
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/chimpanzee.jpg"
            alt="First slide"
          />
          </div>
         
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/chimpanzee.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/241793/gorilla.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselContainer;
