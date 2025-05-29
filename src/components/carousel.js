import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';

function Car() {
  return (
    <Styles>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1} // Replace with your image path
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO PAC</h3>
          <p>PRESERVING AFRICAN CULTURE.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2} // Replace with your image path
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO PAC</h3>
          <p>PRESERVING AFRICAN CULTURE.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3} // Replace with your image path
          alt="Third slide"
        />
        <Carousel.Caption>
         <h3>WELCOME TO PAC</h3>
          <p>PRESERVING AFRICAN CULTURE.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Styles>
  );
}

export default Car;

const Styles = styled.div`
oerflow-x: hidden;
.carousel-item img {
  height: 500px;
  object-fit: cover;
}
  h3 {
    color: #fff;
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
    p {
        color: #fff;
        font-size: 1.2rem;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }
`