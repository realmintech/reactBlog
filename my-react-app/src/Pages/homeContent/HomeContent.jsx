import React from 'react';
import Carousel1 from '../../assets/carousel.webp';
import Carousel2 from '../../assets/carousel2.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function HomeContent() {
  // let today = new Date();
  return (
    <>
      <div className='container'>
        <div class="row mx-3">
          <div class="col4-sm-6 col-md-6 col-lg-8 p-3">
            <div>
               <h3 className='text-center pt-4'>BEAUTY OF NATURE</h3>
               {/* <em>{today}</em> */}
               <img src={Carousel1} alt="lady" className='mt-5' width={450}  />
               <p>
                  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …
               </p>
            </div>
            <div>

            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 p-3">
             <div class="card w-400">
                <div class="card-body">
                  <h2 class="card-title text-center">ABOUT ME</h2>
                  <img class="card-img-top" src={Carousel2} alt="Card" width={100}/>
                  <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                  <em className='px-5'>Lorem ipsum dolor sit</em>
                </div>
              </div>
              <div className='subscribe border bg-dark text-light mt-3 p-5'>
                   <p className='text-center'>SUBCRIBE TO MY NEWLETTER</p>
                   <form action="#" className='input-borderless'>
                      <div class="input-group">
                          <input type="text" class="form-control" placeholder="Your Email" />
                          <br />
                          <button type="button" class="btn btn-primary">SUBCRIBE</button>
                      </div>
                   </form>
              </div>
              <div className='socialMedia border mt-3 p-5 text-center'>
                   <p>FOLLOW ME ON </p>
                   <FaFacebook  fontSize={25}/>
                   <FaTwitter fontSize={25}/>
                   <FaInstagram fontSize={25} />
                   <FaYoutube fontSize={25}/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
