import React from "react";
import SingleArticleComponet from "../../components/singleArticleComponent/Index";
import BlogDisplay from "../../components/blogDisplay/Index";
import CategoryComponent from "../../components/categoryComponent/Index";
import Newsletter from "../../components/newsLetterComponent/Index";
import AboutMe from "../../components/aboutMeComponent/Index";

export default function Index() {
  return (
    <>
      <section className="bgImg"></section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6">
            <SingleArticleComponet />
            <BlogDisplay />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
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
