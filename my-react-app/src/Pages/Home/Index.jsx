import React, { useEffect } from 'react';
import CarouselContent from '../carousel/Carousel';
import ArticleCard from '../../components/articleCardComponent/Index';
import AboutMe from '../../components/aboutMeComponent/Index';
// import Newsletter from '../../components/newsLetterComponent/Index';
// import CategoryComponent from '../../components/categoryComponent/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedBlogs } from '../../actions/createPostAction';

export default function Index() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.featuredBlogs);
  const user = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getFeaturedBlogs());
  }, [dispatch]);

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
            <div className="news__letter__component">
              {/* <Newsletter /> */}
            </div>
            <div className="category__component">
              {/* <CategoryComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
