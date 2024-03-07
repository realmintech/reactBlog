import React from "react";
import "./Index.css";
import Forest from "../../assets/image3.png";
import Desert from "../../assets/image6.png";
import Tourist from "../../assets/image5.png";
import Trees from "../../assets/image7.png";

export default function Index() {
  const data = [
    {
      image: Forest,
      title: "FASHION MODEL SHOOT",
      date: "July 25, 2015",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
    },
    {
      image: Tourist,
      title: "GOLDEN SNOW LAND",
      date: "July 25, 2015",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
    },
    {
      image: Desert,
      title: "FAMILY COMES FIRST",
      date: "July 25, 2015",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
    },
    {
      image: Trees,
      title: "TRAVEL THE WORLD",
      date: "July 25, 2015",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
    },
    {
      image: Tourist,
      title: "CITY CENTER BRIDGE",
      date: "July 25, 2015",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
    },
  ];
  return (
    <>
        {data.map((item, index) => (
      <div className="row blogs" key={index}>
            <div className="col-lg-4">
              <img src={item.image} alt="" className="bloging mt-3" />
            </div>
            <div className="col-lg-8 mt-4">
              <h5>{item.title}</h5>
              <em>{item.date}</em>
              <p>{item.desc}</p>
          </div>
      </div>
        ))}
    </>
  );
}
