import React from 'react';
import './Comment.css';
import Wears from "../../assets/wears.jpg";
import BeautyPic from "../../assets/carousel.webp";
import ManOnSuit from "../../assets/man_image.webp";


export default function Comment() {
  const data = [
    {
      image_url: Wears,
      title: "GOLDEN SNOW LAND",
      today_date: "July 12, 2003",
    },
    {
      image_url: BeautyPic,
      title: "HUGE WATERFALL",
      today_date: "July 12, 2003",
    },
    {
      image_url: ManOnSuit,
      title: "PLAYING SKATEBOARD",
      today_date: "July 12, 2003",
    },
  ];
  return (
    <>
      <p className="trending ">YOU MIGHT ALSO LIKE</p>
      <div className="row likedImg mb-5">
          {data.map((item,index)=>(
            <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
              <img src={item.image_url} alt="" className="beautyPic" />
              <h6 className="title">{item.title}</h6>
              <em>{item.today_date}</em>
            </div>
          ))}
      </div>
    </>
  );
}
