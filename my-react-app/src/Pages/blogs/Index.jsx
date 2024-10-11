import React, { useEffect } from 'react';
import '../blogs/Index.css'
import SingleArticleComponet from '../../Components/singleArticleComponent/Index';
import BlogDisplay from '../../Components/blogDisplay/Index';
import CategoryComponent from '../../Components/categoryComponent/Index';
import Newsletter from '../../Components/newsLetterComponent/Index';
import AboutMe from '../../Components/aboutMeComponent/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getPublishedBlogs } from '../../actions/createPostAction';

export default function Blogs() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.publishedBlogs) || [];
  const blogs = data.data


  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getPublishedBlogs());
  }, [dispatch]);

    if (!blogs) {
      return <div>Loading...</div>;
    }

  return (
    <>
      <section className="bgImg"></section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6">
            <SingleArticleComponet />
            {blogs ? (
              blogs.map((item, index) => (
                <div className="row blogs blog_display_body" key={index}>
                  <BlogDisplay item={item} user={user} />
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
            <div className="about__me__component">
              <AboutMe />
            </div>
            <div className="news__letter__component">
              <Newsletter />
            </div>
            <div className="category__component ">
              <CategoryComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
