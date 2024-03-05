import React from "react";
import "./BlogCard.css";
import Desert from "../../assets/image5.png";
import BeautyPic from "../../assets/carousel.webp";
import BeautyIdol from "../../assets/carousel2.png";
import Forest from "../../assets/image6.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function HomeContent() {
  const data = [
    {
      imageUrl: Forest,
      title: "FOREST MODEL SHOOT",
      description: "Lorem ipsum dolor sit amet doloremque harum. Ipsum.",
    },
    {
      imageUrl: Desert,
      title: "FOREST MODEL SHOOT",
      description: "Lorem ipsum dolor sit amet doloremque harum. Ipsum.",
    },
    {
      imageUrl: BeautyIdol,
      title: "FOREST MODEL SHOOT",
      description: "Lorem ipsum dolor sit amet doloremque harum. Ipsum.",
    },
    {
      imageUrl: BeautyPic,
      title: "FOREST MODEL SHOOT",
      description: "Lorem ipsum dolor sit amet doloremque harum. Ipsum.",
    },
  ];

  return (
    <>
      <div className="container">
        <div class="row mx-3">
          <div class="col4-sm-6 col-md-6 col-lg-8 p-3">
            <div className="firstSection">
              <h3 className="text-center pt-4">BEAUTY OF NATURE</h3>
              <p className="text-center">
                <hr />
                <em>July-12-2024</em>
                <hr />
              </p>
              <img src={BeautyPic} alt="lady" className="beautyPic mt-5" />
              <p>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus at leo
                dignissim congue. Mauris elementum accumsan leo vel tempor. Sit
                amet cursus nisl aliquam.
                <a href="/blog/1">wastech....</a>
              </p>
            </div>
            <div>
              <h3 className="text-center pt-4">ART / LIFESTYLE</h3>
              <hr />
              <div className="row">
                {data.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="forestImg">
                      <img
                        src={item.imageUrl}
                        alt="forest"
                        className="blogImg"
                      />
                      <h5>{item.title}</h5>
                      <hr />
                      <p>{item.description}</p>
                      <p className="read_more_link">Read More...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 p-3">
            <div class="card w-400">
              <div class="card-body mt-4">
                <h2 class="card-title text-center">ABOUT ME</h2>
                <img
                  class="card-img-top"
                  src={BeautyIdol}
                  alt="Card"
                  width={100}
                />
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <em className="px-5">Lorem ipsum dolor sit</em>
              </div>
            </div>
            <div className="subscribe border bg-dark text-light mt-4 p-5">
              <p className="text-center">SUBCRIBE TO MY NEWLETTER</p>
              <form action="#" className="input-borderless">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                  <br />
                  <button type="button" class="btn btn-primary">
                    SUBCRIBE
                  </button>
                </div>
              </form>
            </div>
            <div className="socialMedia border mt-4 p-5 text-center">
              <p>FOLLOW ME ON </p>
              <FaFacebook fontSize={25} />
              <FaTwitter fontSize={25} />
              <FaInstagram fontSize={25} />
              <FaYoutube fontSize={25} />
            </div>
            <div className="imgWithBanner border mt-4">
              <img className="" src={Desert} alt="forest" width={315} />
              <h3>
                BANNER ADS <br /> 300 * 250
              </h3>
            </div>
            <div className="category mt-4">
              <h3>CATEGORIES</h3>
              <p>Art</p>
              <hr />
              <p>Food</p>
              <hr />
              <p>Lifestyle</p>
              <hr />
              <p>Music</p>
              <hr />
              <p>Top</p>
              <hr />
              <p>Travel</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
