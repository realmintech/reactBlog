import React from "react";
import SingleArticleComponet from "../../components/singleArticleComponent/Index";
import BlogDisplay from "../../components/blogDisplay/Index";
import CategoryComponent from "../../components/categoryComponent/Index";
import Newsletter from "../../components/newsLetterComponent/Index";
import AboutMe from "../../components/aboutMeComponent/Index";


import Forest from "../../assets/image3.png";
import Desert from "../../assets/image6.png";
import Tourist from "../../assets/image5.png";
import Trees from "../../assets/image7.png";

export default function Index() {
   const data = [
     {
       image: Forest,
       title: "FASHION MODEL SHOOT",
       date: "July 25, 2015",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
     },
     {
       image: Tourist,
       title: "GOLDEN SNOW LAND",
       date: "July 25, 2015",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
     },
     {
       image: Desert,
       title: "FAMILY COMES FIRST",
       date: "July 25, 2015",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
     },
     {
       image: Trees,
       title: "TRAVEL THE WORLD",
       date: "July 25, 2015",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
     },
     {
       image: Tourist,
       title: "CITY CENTER BRIDGE",
       date: "July 25, 2015",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam eos in fugit aut repudiandae dicta? Dignissimos autem unde harum ab quibusdam! Aliquam assumenda consectetur tempora deleniti voluptas vitae a?",
     },
   ];
  return (
    <>
      <section className="bgImg"></section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6">
            <SingleArticleComponet />
      {data.map((item, index) => (
        <div className="row blogs" key={index}>
            <BlogDisplay item={item}/>
        </div>
      ))}
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
