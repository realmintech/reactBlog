import React from "react";
import "./Index.css";

export default function Index(props) {
  const { item } = props;
  return (
    <>
      <div className="col-lg-4">
        <img src={item.image} alt="" className="bloging my-4" />
      </div>
      <div className="col-lg-8 mt-5">
        <h5>
          <a className="text-decoration-none text-dark" href="/Blogs">
            {item.title}
          </a>
        </h5>
        <em className="date">{item.date}</em>
        <p>{item.desc}</p>
      </div>
    </>
  );
}
