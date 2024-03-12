import React from "react";
import "./Index.css";

export default function Comment(props) {
  const { item } = props;
  return (
    <>
      <div className="col-lg-2">
        <img src={item.image} alt="man_on_suit" className="roundedImg" />
      </div>
      <div className="col-lg-10">
        <h3 className="writer">{item.writer}</h3>
        <span className="admin">{item.admin}</span>
        <span>{item.date}</span>
        <span className="reply">{item.reply}</span>
        <p className="desc">{item.desc}</p>
      </div>
    </>
  );
}
