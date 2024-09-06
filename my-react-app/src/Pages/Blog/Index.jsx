import React, { useState, useEffect } from 'react';
import './Index.css';
import ManOnSuit from '../../assets/man_image.webp';
import AboutMe from '../../components/aboutMeComponent/Index';
import Newsletter from '../../components/newsLetterComponent/Index';
import Comment from '../../components/commentSection/Index';
import { FaShare, FaTag } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import YouMightAlsoLikeComponent from '../../components/youMightAlsoLikeComponent/YouMightAlsoLikeComponent';

export default function SingleBlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const blogDetail = await axios.get(
          `http://localhost:3000/blogs/${id}/blog`
        );
        // console.log('blogDetail', blogDetail);
        if (blogDetail && blogDetail.data) {
          setBlog(blogDetail.data);
        }
      } catch (err) {
        console.log('this is blog detail: ', err);
      }
    };
    fetchBlogDetail();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bgImg"></div>
      <div className="container">
        <div className="row">
          <div className="col4-lg-8 col-md-8 col-sm-8">
            <div className="heading">
              <h3>{blog.title}</h3>
              <p className="title_date">
                {moment(blog.timestamp).format('llll')}
              </p>
            </div>
            <div className="news">
              <div className="blog_big_img">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="beautyPic"
                />
              </div>
              <p className="picCaption">Tags: {blog.tags}</p>
              <p>{blog.description}</p>
              <div className="tagShare row">
                <div className="btns col-lg-8 col-md-8 col-sm-8">
                  <FaTag />
                  <button className="btn">COOKING</button>
                  <button className="btn">FOOD</button>
                  <button className="btn">LIFESTYLE</button>
                </div>
                <div className="shareIcon col-lg-4 col-md-4 col-sm-4">
                  <button>
                    <FaShare />
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="highLight">
                <span> ART / FOOD / TOP</span>
              </p>
              <span className="flexImgWord row">
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <img
                    src={ManOnSuit}
                    alt="man_on_suit"
                    className="roundedImg"
                  />
                </div>
                <span className="col-lg-10 col-md-10 col-sm-10">
                  <h3>John Phillipe</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, dicta? Nam adipisci eveniet cupiditate delectus,
                    asperiores quo odio sed amet provident voluptate nostrum
                    quis veritatis nisi. Repudiandae quod autem fugiat. Minima
                  </p>
                </span>
              </span>
              <YouMightAlsoLikeComponent />
              <p
                className="comment"
                style={{
                  borderTop: '1px solid rgba(139,135,135,0.514)',
                  paddingTop: '30px',
                }}
              >
                2 COMMENTS
              </p>
              {blog.comments && blog.comments.length > 0 ? (
                blog.comments.map((comment, index) => (
                  <div className="flexImgWord row" key={index}>
                    <Comment item={comment} />
                  </div>
                ))
              ) : (
                <p>No comments available.</p>
              )}

              <p className="commentSection">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <h6>COMMENT *</h6>
              <textarea
                name="comment"
                id=""
                cols="97"
                rows="10"
                className="textArea"
              ></textarea>
              <div className="row namedInput">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h6>NAME *</h6>
                  <input type="text" placeholder="NAME*" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h6>EMAIL *</h6>
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <h6>WEBSITE</h6>
                  <input type="text" placeholder="Website" />
                </div>
              </div>
              <div className="checkedInput">
                <input type="checkbox" name="checked" id="" />
                <span>
                  SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT
                  TIME I COMMENT.
                </span>
              </div>
              <button className="btnPost">POST COMMENT</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <AboutMe />
            <Newsletter />
            <div className="tagDiv">
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
