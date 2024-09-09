import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function CarouselContent({ data = [] }) {
  const arrayDataItems = data.map((item, index) => (
    <Carousel.Item key={index}>
      <div className='img_div_cover'>
        <img
          className="d-block w-100 h-40 pictureReset"
          src={item.imageUrl}
          alt={`Slide ${index}`}
        />
      </div>
      <Carousel.Caption>
        <h5 className="carousel_title">{ item.title }</h5>
        <p className="carousel_desc">{item.description.slice(0, 60)}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return <Carousel data-bs-theme="white">{arrayDataItems}</Carousel>;
}

export default CarouselContent;
