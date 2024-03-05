import React from 'react';
import './AllBlogPost.css';
// import CarouselContent from "../carousel/Carousel";
import Newsletter from '../newsLetterComponent/Index';
import AboutMe from '../aboutMeComponent/Index';
import Desert from '../../assets/image3.png';
import SingleArticleComponet from '../singleArticleComponent/Index';

export default function AllBlogPost() {
  const data = [
    {
      image: Desert,
      title: "FASHION MODEL SHOOT",
      date: "July 22, 2023",
      blogs:
        "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    },
    {
      image: Desert,
      title: "FASHION MODEL SHOOT",
      date: "July 22, 2023",
      blogs:
        "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    },
    {
      image: Desert,
      title: "FASHION MODEL SHOOT",
      date: "July 22, 2023",
      blogs:
        "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    },
    {
      image: Desert,
      title: "FASHION MODEL SHOOT",
      date: "July 22, 2023",
      blogs:
        "Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam.",
    }
  ];
  return (
    <>
      {/* <div>
        <CarouselContent />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
          {data.map((item,index)=>(
            <div className="col-lg-4 blogList" key={index}>
              <img src={Desert} alt="" />
              <h3>{item.title}</h3>
              <em>{item.date}</em>
              <p>{item.blogs}</p>
            </div>
          ))}
            <SingleArticleComponet />
          </div>
          <div className="col-lg-4">
            <AboutMe />
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}