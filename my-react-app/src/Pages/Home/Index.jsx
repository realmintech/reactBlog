import React, { useEffect } from 'react';
import CarouselContent from '../carousel/Carousel';
import ArticleCard from '../../Components/articleCardComponent/Index';
import AboutMe from '../../Components/aboutMeComponent/Index';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedBlogs } from '../../actions/createPostAction';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.featuredBlogs);
  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getFeaturedBlogs());
  }, [dispatch]);

  if (!data) {
    return (
      <div class="d-flex justify-content-center my-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="imgSlider">
        <CarouselContent data={data} />
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-6 col-md-6 col-lg-8">
            <div>
              <h5
                className="text-center p-4"
                style={{ borderBottom: '1px solid gray' }}
              >
                ART / LIFESTYLE
              </h5>
              <div className="row">
                {data &&
                  data?.map((item, index) => (
                    <div className="col-lg-6 mt-5" key={index}>
                      <ArticleCard item={item} user={user} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 ">
            <div className="about__me__component">
              <AboutMe />
            </div>
            <div className="socialMedia border mt-3 p-5 text-center mb-4">
              <p>FOLLOW ME ON </p>
              <Link to="https://x.com/Adesina20638088">
                <FaTwitter
                  style={{
                    marginRight: '10px',
                    fontSize: '25px',
                    color: 'black',
                  }}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/mariam-adesina-temitope">
                <FaLinkedin
                  style={{
                    fontSize: '25px',
                    marginRight: '10px',
                    color: 'black',
                  }}
                />
              </Link>
              <FaFacebook style={{ marginRight: '10px', fontSize: '25px' }} />
              <FaInstagram fontSize={25} style={{ marginRight: '10px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
