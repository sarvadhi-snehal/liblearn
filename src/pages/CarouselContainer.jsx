import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
function CarouselContainer() {
  return (


    
    <div className="car">

<Carousel className="third">
        <Carousel.Item interval={200}>
          <div >
            <h1>hello</h1>
          </div>

          
        </Carousel.Item>
        <Carousel.Item interval={200}>
          <h1>Hola</h1>

         
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <h1>Konnichi wa</h1>

          
        </Carousel.Item>
      </Carousel>

   


      <Carousel className="first">
        <Carousel.Item>
          <div >
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

      <Carousel className="second">
  <Carousel.Item interval={1000}>
    <img
      className="d-block h-100 w-100"
      src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 img-fluid"
      src="https://picsum.photos/id/10/200/100"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://picsum.photos/id/5/200/100"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
}

export default CarouselContainer;
