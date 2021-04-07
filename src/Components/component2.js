import React from 'react';
import {Carousel} from "react-bootstrap"
const ComponentTwo = () =>{
    return(
      <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="/vetements.jpg"
      alt="vetements"
    />
    <Carousel.Caption>
      <h3>Mode Homme</h3>
      <p>Dernières tendances des vêtements pour homme</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="/women.jpg"
      alt="women"
    />

    <Carousel.Caption>
      <h3>Mode Femme</h3>
      <p>Dernières tendances des vêtements pour femmes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="/bebe.jpg"
      alt="bebe"
    />

    <Carousel.Caption>
      <h3>Mode Enfant</h3>
      <p>Dernières tendances des vêtements pour enfants.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    )
  }
  export default ComponentTwo