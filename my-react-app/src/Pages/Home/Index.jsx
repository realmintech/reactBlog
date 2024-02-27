import React from "react";
import CarouselContent from "../../pages/carousel/Carousel";
import SingleArticleComponet from "../../components/singleArticleComponent/Index";
import ArticleCard from "../../components/articleCardComponent/Index";
import AboutMe from "../../components/aboutMeComponent/Index";
import Newsletter from "../../components/newsLetterComponent/Index";
import CategoryComponent from "../../components/categoryComponent/Index";

export default function Index() {
  return (
    <>
      <div className="imgSlider">
        <CarouselContent />
      </div>
      <div className="container">
        <div class="row ">
          <div class="col-12 col-sm-6 col-md-6 col-lg-8">
            <SingleArticleComponet />
            <ArticleCard />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 ">
            <div className="about__me__component">
              <AboutMe />
            </div>
            <div className="news__letter__component">
              <Newsletter />
            </div>
            <div className="category__component">
              <CategoryComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
