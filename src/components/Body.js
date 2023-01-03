import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./body.css"
import Sushi from "../Images/sushi.jpg"

function Body () {
    return(
        <Container className="contain">
            <div className="text"><span>Sushi Done</span><br/><span>The</span><br/><span>Right Way</span></div>
        <Carousel className="carousel w-85 mx-auto">
        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
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
    <div className="categories">
      <div className="images">
        <img src={Sushi}></img>
        <img src={Sushi}></img>
        <img src={Sushi}></img>
        <img src={Sushi}></img>
      </div>
    </div>
    </Container>
    )
}

export default Body;