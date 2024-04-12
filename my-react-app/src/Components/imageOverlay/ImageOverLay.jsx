import React from 'react';
import './ImageOverlay.css';
import Image from '../../assets/image6.png'

export default function ImageOverLay() {
  return (
    <>
      <div className="containerOverlay">
        <img src={Image} alt="desert" className="image" style={{ width: '100%' }} />
        <div className="middle">
          <div className="text">Mariam</div>
        </div>
      </div>
    </>
  );
}
