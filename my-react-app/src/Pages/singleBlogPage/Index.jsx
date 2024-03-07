import React from 'react';
import './Index.css';
import Comment from '../../components/commentSection/Comment'
import BeautyPic from '../../assets/carousel.webp';
import ManOnSuit from '../../assets/man_image.webp';
import AboutMe from '../../components/aboutMeComponent/Index';
import Newsletter from '../../components/newsLetterComponent/Index';
import { FaShare, FaTag } from 'react-icons/fa';
// import AllBlogPost from '../../components/allBlogPosts/AllBlogPost';

// rename this to singlePostPage or create anoter page and name it singlePostPage then copy and past all this code into it

// remove dropdown list from navigation bar items

//make sure your design looks like exactly what we have on the template i.e (work more on your css)

// a blog Page should contain all the list of articlers with pagination method nor the description of the article like what you have here

export default function SingleBlogPost() {
  return (
    <>
      <div className="bgImg"></div>
      <div className="container">
        <div className="row">
          <div className="col4-lg-8 col-md-8 col-sm-6">
            <div className="heading">
              <h3>TOP 10 INDREDIENTS</h3>
              <span>July 12, 2003</span>
            </div>
            <div className="news">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                alias veritatis, quam magnam dignissimos voluptas porro sed
                recusandae, magni quaerat quasi voluptates corrupti sint? Sed
                blanditiis reprehenderit aut doloremque officia. Voluptates,
                illum fuga consequuntur perferendis eum optio, exercitationem
                vitae deserunt qui magnam, esse suscipit facilis velit. Vel,
                aperiam deleniti alias tempore minima laudantium facilis. Error
                quaerat consequatur dolor amet sit? Eius eum impedit optio,
                consequatur nemo cupiditate mollitia aliquid ad voluptas,
                quibusdam ex eaque, explicabo beatae quas assumenda saepe quis
                praesentium commodi recusandae harum repellat dolorem
                asperiores! Aspernatur, vel corporis?
              </p>
              <img src={BeautyPic} alt="" className="beautyPic" />
              <em className="picCaption">Travelling the world</em>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus, saepe maxime minus odio temporibus illum placeat
                excepturi asperiores corrupti dignissimos doloribus accusantium
                nemo nobis quisquam enim. Maxime sit doloremque mollitia? Sit
                aut, nostrum consequatur ratione blanditiis numquam excepturi
                eum esse nisi ut molestiae molestias placeat ipsa. Cupiditate
                blanditiis possimus corporis dolore dignissimos suscipit
                sapiente, eveniet id tempore beatae quam illum.
              </p>
              <span className="desc">
                GOOD DESIGN IS MAKING SOMETHING INTELLIGIBLE AND MEMORABLE.
                GREAT DESIGN IS MAKING SOMETHING MEMORABLE AND MEANINGFUL.
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                eaque deserunt neque nihil non delectus laudantium esse itaque.
              </p>
              <div className="tagShare row">
                <div className="btns col-lg-8 col-md-8 col-sm-8">
                  <FaTag />
                  <button className="btn">COOKING</button>
                  <button className="btn">FOOD</button>
                  <button className="btn">LIFESTYLE</button>
                </div>
                <div className="shareIcon col-lg-4 col-md-4 col-sm-4">
                  <button>
                    <FaShare />
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p className="highLight">ART / FOOD / TOP</p>
              <span className="flexImgWord">
                <img src={ManOnSuit} alt="man_on_suit" className="roundedImg" />
                <span>
                  <h3>John Phillipe</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, dicta? Nam adipisci eveniet cupiditate delectus,
                    asperiores quo odio sed amet provident voluptate nostrum
                    quis veritatis nisi. Repudiandae quod autem fugiat. Minima
                    esse fugiat culpa eos doloribus. Vel voluptatum ipsum totam
                    hic magni. Nam doloribus dicta vel quam quisquam tenetur
                    assumenda laboriosam corporis nemo! Hic quod aspernatur amet
                    modi maxime itaque.
                  </p>
                </span>
              </span>

              <hr />
              <Comment />
              <hr />
              <p className="comment">2 COMMENTS</p>
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={ManOnSuit}
                    alt="man_on_suit"
                    className="roundedImg"
                  />
                </div>
                <div className="col-lg-10">
                  <h3>John Phillipe</h3>
                  <span>July 12, 2003 at 8:45am </span>
                  <em>Reply</em>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, dicta? Nam adipisci eveniet cupiditate delectus,
                    asperiores quo odio sed amet provident voluptate nostrum
                    quis veritatis nisi. Repudiandae quod autem fugiat. Minima
                    esse fugiat culpa eos doloribus. Vel voluptatum ipsum totam
                    hic magni. Nam doloribus dicta vel quam quisquam tenetur
                    assumenda laboriosam corporis nemo! Hic quod aspernatur amet
                    modi maxime itaque.
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-2">
                  <img
                    src={ManOnSuit}
                    alt="man_on_suit"
                    className="roundedImg"
                  />
                </div>
                <div className="col-lg-10">
                  <h3>John Phillipe</h3>
                  <span>July 12, 2003 at 8:45am </span>
                  <em>Reply</em>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, dicta? Nam adipisci eveniet cupiditate delectus,
                    asperiores quo odio sed amet provident voluptate nostrum
                    quis veritatis nisi. Repudiandae quod autem fugiat. Minima
                    esse fugiat culpa eos doloribus. Vel voluptatum ipsum totam
                    hic magni. Nam doloribus dicta vel quam quisquam tenetur
                    assumenda laboriosam corporis nemo! Hic quod aspernatur amet
                    modi maxime itaque.
                  </p>
                </div>
              </div>
              <hr />
              <p className="commentSection">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <h6>COMMENT *</h6>
              <textarea name="comment" id="" cols="97" rows="10" className='textArea'></textarea>
              <div className="row namedInput">
                <div className="col-lg-4">
                  <h6>NAME *</h6>
                  <input type="text" placeholder="NAME*" />
                </div>
                <div className="col-lg-4">
                  <h6>EMAIL *</h6>
                  <input type="text" placeholder="Email*" />
                </div>
                <div className="col-lg-4">
                  <h6>WEBSITE</h6>
                  <input type="text" placeholder="Website" />
                </div>
              </div>
              <div className="checkedInput">
                <input type="checkbox" name="checked" id="" />
                <span>
                  SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT
                  TIME I COMMENT.
                </span>
              </div>
              <button className="btnPost">POST COMMENT</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <AboutMe />
            <Newsletter />
            <div className="tagDiv">
              <button>BRIDGE</button>
              <button>CULTURE</button>
              <button>FOOD</button>
              <button>FAMILY</button>
              <button>CITY</button>
              <button>LIFESTYLE</button>
              <button>PHOTOGRAPH</button>
              <button>PORTRAIT</button>
              <button>SPORT</button>
              <button>TRAVEL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
