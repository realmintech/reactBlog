import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Desert from '../../assets/image5.png';
import './Index.css'

export default function Newsletter() {
  return (
    <>
      <div className='subscribe border bg-dark text-light mt-3 p-5'>
        <p className='text-center'>SUBCRIBE TO MY NEWLETTER</p>
        <form action='#' className='input-borderless'>
          <div class='input-group'>
            <input type='text' class='form-control' placeholder='Your Email' />
            <br />
            <button type='button' class='btn btn-primary'>
              SUBCRIBE
            </button>
          </div>
        </form>
      </div>
      <div className='socialMedia border mt-3 p-5 text-center'>
        <p>FOLLOW ME ON </p>
        <FaFacebook fontSize={25} />
        <FaTwitter fontSize={25} />
        <FaInstagram fontSize={25} />
        <FaYoutube fontSize={25} />
      </div>
      <div className='imgWithBanner border'>
        <img className='' src={Desert} alt='forest' width={315} />
        <h3>
          BANNER ADS <br /> 300 * 250
        </h3>
      </div>
    </>
  );
}
