import React from "react";
import SingleArticleComponet from "../../components/singleArticleComponent/Index";
import BlogDisplay from '../../components/blogDisplay/Index';

export default function Index() {
  return (
    <>
      <section className="bgImg"></section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <SingleArticleComponet />
            <BlogDisplay />
          </div>
          <div className="col-lg-4">
          </div>
        </div>
      </div>
    </>
  );
}
