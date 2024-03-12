import React from "react";
import CarouselContent from "../carousel/Carousel";
import Forest from "../../assets/image6.png";
import SingleArticleComponet from "../../components/singleArticleComponent/Index";
import ArticleCard from "../../components/articleCardComponent/Index";
import AboutMe from "../../components/aboutMeComponent/Index";
import Newsletter from "../../components/newsLetterComponent/Index";
import CategoryComponent from "../../components/categoryComponent/Index";

export default function Index() {
  const data = [
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      date: "July 12, 2003",
      description:
        "Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.",
    },
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      date: "July 12, 2003",
      description:
        "Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.",
    },
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      date: "July 12, 2003",
      description:
        "Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.",
    },
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      date: "July 12, 2003",
      description:
        "Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.",
    },
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      date: "July 12, 2003",
      description:
        "Lorem ipsum dolor sit amet doloremque harum. Ipsum.consectetur veritatis sequi suscipit. Sunt aliquid dictaveritatis reiciendis maxime omnis atque a cum perspiciatis animi.",
    },
  ];
  return (
    <>
      <div className="imgSlider">
        <CarouselContent />
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-6 col-md-6 col-lg-8">
            <SingleArticleComponet />
            <div>
              <h5 className="text-center p-4" style={{borderBottom: '1px solid gray'}}>ART / LIFESTYLE</h5>
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-lg-6 mt-5" key={index}>
                    <ArticleCard item={item} />
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
