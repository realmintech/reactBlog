import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';

function CarouselContent({ data = [] }) {
  const navigate = useNavigate();

  const arrayDataItems = data.map((item, index) => (
    <Carousel.Item key={index}>
      <div className='img_div_cover'>
        <img
          onClick={() => {
            navigate(`/blog/${item._id}`);
          }}
          className='d-block  picture___reset'
          src={item.imageUrl}
          alt={`Slide ${index}`}
        />
      </div>
      <Carousel.Caption>
        <h5
          className='carousel_title'
          onClick={() => {
            navigate(`/blog/${item._id}`);
          }}
        >
          {item.title}
        </h5>
        <p className='carousel_desc'>{item.description.slice(0, 60)}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return <Carousel data-bs-theme='white'>{arrayDataItems}</Carousel>;
}

export default CarouselContent;
