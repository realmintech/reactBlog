import React from 'react';
import './Comment.css';
import Wears from "../../assets/wears.jpg";
import BeautyPic from "../../assets/carousel.webp";
import ManOnSuit from "../../assets/man_image.webp";


export default function Comment() {
  return (
    <>
      {/* <======== move this to another component =====> begins */}
      <p className="trending">YOU MIGHT ALSO LIKE</p>
      <div className="row likedImg">
        <div className="col">
          <img src={BeautyPic} alt="" className="beautyPic" />{" "}
          {/* style this image properly cuz it looks strecth  (i told you to offen use object-fit property*/}
          <h6 className="title">GOLDEN SNOW LAND</h6>
          <em>July 12, 2003</em>
        </div>
        <div className="col">
          <img src={ManOnSuit} alt="" className="beautyPic" />
          <h6 className="title">HUGE WATERFALL</h6>
          <em>July 12, 2003</em>
        </div>
        <div className="col">
          {/* style this image properly cuz it looks strecth  */}
          <img src={Wears} alt="" className="beautyPic" />
          <h6 className="title">PLAYING SKATEBOARD</h6>
          <em>July 12, 2003</em>
        </div>
      </div>

      {/* <======== move this to another component =====> ends */}
    </>
  );
}
