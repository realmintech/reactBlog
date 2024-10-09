import React from 'react';
import moment from 'moment';
import './YouMightAlsoLikeComponent.css';
import '../../components/articleCardComponent/Index';

export default function YouMightAlsoLikeComponent({ likedBlogs, navigate }) {
  if (!likedBlogs || likedBlogs.length === 0) {
    return <div>No similar blogs.</div>;
  }

  return (
    <>
      <p className='trending mt-4'>YOU MIGHT ALSO LIKE</p>
      <div className='row likedImg mb-5'>
        {likedBlogs ? (
          likedBlogs.map((blog) => (
            <div key={blog._id} className='col-sm-6 col-md-4 col-lg-4'>
              <div className='single_blog_img'>
                <img
                  onClick={() => {
                    navigate(`/blog/${blog._id}`);
                  }}
                  src={blog.imageUrl}
                  alt={blog.title}
                  className='blog_img'
                />
              </div>
              <div className='title-wrapper'>
                <h5
                  className='title-text'
                  onClick={() => {
                    navigate(`/blog/${blog._id}`);
                  }}
                >
                  {blog.title.slice(0, 25)}...
                </h5>
              </div>
              <p className='today_date'>
                {moment(blog.timestamp).format('llll')}
              </p>
            </div>
          ))
        ) : (
          <p>No similar post.</p>
        )}
      </div>
    </>
  );
}
