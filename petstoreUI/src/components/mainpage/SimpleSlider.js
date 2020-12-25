import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import cat from './images/cat.png';
import test from './images/test.png';
import dog from './images/dog.jpg';


export default class SimpleSlider extends Component {
  render() {
    return (
      <div>
        <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cat}
      alt="First slide"
      // height="50%"

    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={test}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dog}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}
