import React from "react";
import "./Index.css";
import AboutMe from "../aboutMeComponent/Index";
import Newsletter from "../newsLetterComponent/Index";

export default function ContactPage() {
  return (
    <>
      <div className="blurBgImg"></div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-8">
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              delectus iste deserunt sunt repudiandae sapiente asperiores ad.
              Deserunt, quo sapiente assumenda voluptas corporis beatae aliquid
              error excepturi quis accusamus nobis. Deserunt eligendi tempora
              beatae nobis, esse architecto. Temporibus vero sint consectetur
              saepe nisi, odio consequatur non ea fugiat voluptas blanditiis
              amet voluptatibus hic eius illo corporis aspernatur? Aut, odit
              fugiat? Ab autem ipsam a optio. Rerum, earum nostrum iste itaque
              possimus dolores! Libero consequatur ipsa provident voluptas
              possimus eum dolores alias laborum minus. Dolore numquam
              consectetur veniam laboriosam nulla nesciunt.
            </p>
            <label htmlFor="name" className="labelBold m-2">
              NAME*
            </label>
            <br />
            <input type="text" className="inputWithLongWidth" />
            <br />
            <label htmlFor="EMAIL" className="labelBold m-2">
              EMAIL*
            </label>
            <br />
            <input type="email" className="inputWithLongWidth" />
            <br />
            <label htmlFor="msg" className="labelBold m-2">
              MESSAGE*
            </label>
            <br />
            <textarea className="dropMsg"
              name="msg"
              id=""
              cols="97"
              rows="10"
              placeholder=""
            ></textarea>
            <button className="btn btn-secondary">SUBMIT FORM</button>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 ">
            <div className="about__me__component">
              <AboutMe />
            </div>
            <div className="news__letter__component">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
