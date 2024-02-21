import React from 'react';
import Carousel1 from '../../assets/carousel.webp';
import Carousel2 from '../../assets/carousel2.png';

export default function HomeContent() {
  return (
    <>
        <div class="row">
          <div class="col-sm-4 p-3 bg-primary text-white">.col</div>
          <div class="col-sm-8 p-3 bg-dark text-white">.col</div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-6'> 
                  <h3 className='text-center pt-4'>BEAUTY OF NATURE</h3>
                  <img src={Carousel1} alt="lady" width={750} height={400} className='mt-5' />
                </div>
                <div className='col-lg-4 col-md-6 p-5'>
                  <div class="card w-400">
                    <div class="card-body">
                        <h2 class="card-title text-center">ABOUT ME</h2>
                        <img class="card-img-top" src={Carousel2} alt="Card" width={100}/>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <em className='px-5'>Lorem ipsum dolor sit</em>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
