import React from "react";
import "./Index.css";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function Index({item}) {
   const navigate = useNavigate();

   const handleNavigate = () => {
     navigate(`/blog/${item._id}`);
   };
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-4  mt-3" onClick={handleNavigate}>
        <div className="image___div">
          <img src={item.imageUrl} alt="" className="bloging__img my-4" />
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 mt-4">
        <h4 className="blog_display_title" onClick={handleNavigate}>
            {item.title}
        </h4>
        <span className="blog_display_date">
          {moment(item.timestamp).format('llll')}
        </span>
        <p onClick={handleNavigate}>{item.description.slice(0, 200)}...</p>
      </div>
    </>
  );
}
