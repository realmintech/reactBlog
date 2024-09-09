import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import './YouMightAlsoLikeComponent.css';
import { useNavigate } from 'react-router-dom';

export default function YouMightAlsoLikeComponent() {
  const { id } = useParams();
  const [likedBlogs, setLikedBlogs] = useState([]);
  const navigate = useNavigate;

  useEffect(() => {
    const fetchSimilarBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/blogs/${id}/similar`
        );
        // console.log('Similar blogs', response.data);
        if (response.data) {
          setLikedBlogs(response.data);
        }
      } catch (err) {
        console.log('Error fetching similar blogs: ', err);
      }
    };
    fetchSimilarBlogs();
  }, [id]);

  if (!likedBlogs) {
    return <div>No similar blogs.</div>;
  }

  return (
    <>
      <p className='trending m-5'>YOU MIGHT ALSO LIKE</p>
      <div className='row likedImg mb-5'>
        {likedBlogs.map((blog) => (
          <div key={blog._id} className='col-sm-6 col-md-4 col-lg-4'>
            <img src={blog.imageUrl} alt={blog.title} className='beautyPic' />
            <h6
              className='title'
              onClick={() => {
                navigate(`/blog/${blog._id}`);
              }}
            >
              {blog.title}
            </h6>
            <em>{moment(blog.timestamp).format('llll')}</em>
          </div>
        ))}
      </div>
    </>
  );
}
