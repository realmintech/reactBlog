import React, { useState, useEffect } from 'react';
import './Index.css';
import MyPicture from '../../assets/passport.jpg';
import AboutMe from '../../Components/aboutMeComponent/Index';
import Newsletter from '../../Components/newsLetterComponent/Index';
import Comment from '../../Components/commentSection/Index';
import { FaShare, FaTag } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import YouMightAlsoLikeComponent from '../../Components/youMightAlsoLikeComponent/YouMightAlsoLikeComponent';
import { createComment, getPostComments } from '../../actions/commentAction';
import { useDispatch, useSelector } from 'react-redux';
const API = process.env.REACT_APP_API_URL;

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.comments.comments);
  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const blogDetail = await axios.get(`${API}/blogs/${id}/blog`);
        if (blogDetail && blogDetail.data) {
          setBlog(blogDetail.data);
        }
      } catch (err) {
        console.log('this is blog detail: ', err);
      }
    };
    fetchBlogDetail();
  }, [id]);

  useEffect(() => {
    const fetchSimilarBlogs = async () => {
      try {
        const response = await axios.get(`${API}/blogs/${id}/similar`);
        if (response.data) {
          setLikedBlogs(response.data);
        }
      } catch (err) {
        console.log('Error fetching similar blogs: ', err);
      }
    };
    fetchSimilarBlogs();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(id, content));
    setContent('');
  };

  useEffect(() => {
    dispatch(getPostComments(id));
  }, [dispatch, id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='bgImg'></div>
      <div className='container'>
        <div className='row'>
          <div className='col4-lg-8 col-md-8 col-sm-8'>
            <div className='heading'>
              <h2>{blog.title}</h2>
              <p className='title_date'>
                {moment(blog.timestamp).format('llll')}
              </p>
            </div>
            <div className='news'>
              <div className='blog_big_img'>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className='beautyPic'
                />
              </div>
              <p className='picCaption'>
                <button class='btn btn-primary' type='submit'>
                  {blog.tags}{' '}
                </button>
              </p>
              <p>{blog.description}</p>
              <div className='tagShare row'>
                <div className='btns col-lg-8 col-md-8 col-sm-8'>
                  <FaTag />
                  <button className='btn'>{blog.tags}</button>
                </div>
                <div className='shareIcon col-lg-4 col-md-4 col-sm-4'>
                  <button>
                    <FaShare />
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className='highLight'>
                <span> ART / FOOD / TOP</span>
              </p>
              <span className='flexImgWord row'>
                <div className='col-lg-2 col-md-2 col-sm-2'>
                  <img
                    src={MyPicture}
                    alt='man_on_suit'
                    className='roundedImg'
                  />
                </div>
                <span className='col-lg-10 col-md-10 col-sm-10 mb-5'>
                  <h3 className='h3__maryam'>Mariam Temitope</h3>
                  <p>
                    I am a front-end developer, passionate about converting
                    ideas into reality.
                  </p>
                </span>
              </span>
              <YouMightAlsoLikeComponent
                likedBlogs={likedBlogs}
                navigate={navigate}
              />
              <p
                className='comment'
                style={{
                  borderTop: '1px solid rgba(139,135,135,0.514)',
                  paddingTop: '30px',
                }}
              >
                {data.length} COMMENTS
              </p>
              {data.length > 0 ? (
                data.map((comment, index) => (
                  <div className='flexImgWord row' key={index}>
                    <Comment item={comment} />
                  </div>
                ))
              ) : (
                <p>No comments available.</p>
              )}

              <p className='commentSection'>
                Your email address will not be published. Required field is
                marked *
              </p>
              <h6>COMMENT *</h6>
              <textarea
                name='comment'
                id=''
                cols='97'
                rows='5'
                required
                className='textArea'
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <button
                className='btnPost'
                disabled={!content}
                onClick={handleSubmit}
              >
                POST COMMENT
              </button>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-6'>
            <AboutMe />
            <Newsletter />
            <div className='tagDiv'>
              <button>BRIDGE</button>
              <button>PHOTOGRAPH</button>
              <button>FOOD</button>
              <button>CULTURE</button>
              <button>FAMILY</button>
              <button>LIFESTYLE</button>
              <button>CITY</button>
              <button>SPORT</button>
              <button>PORTRAIT</button>
              <button>TRAVEL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
