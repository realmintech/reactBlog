import React from 'react';
import './AllBlogPost.css';
import Newsletter from '../newsLetterComponent/Index';
import AboutMe from '../aboutMeComponent/Index';
import SingleArticleComponet from '../singleArticleComponent/Index';

export default function AllBlogPost() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <SingleArticleComponet />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <AboutMe />
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}