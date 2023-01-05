import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./body.css"
import Sushi from "../Images/sushi.jpg"

function Body () {
    return(
        <Container className="contain">
        <Carousel className="carousel w-85 mx-auto">
        
      <Carousel.Item>
        <img
          className="slide d-block w-100"
          src={Sushi}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="slide d-block w-100"
          src={Sushi}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="slide d-block w-100"
          src={Sushi}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="categories">
      <div className="images">
        <img src={Sushi}></img>
        <img src={Sushi}></img>
        <img src={Sushi}></img>
        <img src={Sushi}></img>
      </div>
    </div>
    <Carousel interval={100000000} className="carousel-about mt-0 w-85 mx-auto">
        
      <Carousel.Item>
      <Carousel.Caption className="caption">
          <h5>Name</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      <img
          className="slide-about d-block w-20"
          src={Sushi}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption className="caption">
          <h5>Name</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      <img
          className="slide-about d-block w-20"
          src={Sushi}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption className="caption">
          <h5>Name</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      <img
          className="slide-about d-block w-20"
          src={Sushi}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
    )
}

export default Body;