import React from "react";
import "./Index.css";

export default function Comment(props) {
  const { item } = props;
  return (
    <>
      <div className="col-lg-10 col-md-10 col-sm-10">
        <h3 className="writer">{item.author}</h3>
        <span className="admin">{item.content}</span>
        <span>{item.createdAt}</span>
      </div>
    </>
  );
}