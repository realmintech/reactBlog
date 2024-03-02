import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Index.css";

export default function Newsletter() {
  return (
    <>
      <div className="subscribe border bg-dark text-light mt-3 p-5">
        <p className="text-center">SUBCRIBE TO MY NEWLETTER</p>
        <form action="#" className="input-borderless">
          <div class="input-group">
            <input
              type="text"
              className="newLetterInput text-center"
              placeholder="Your Email Address"
            />
            <br />
            <input
              className="new_letter-button mt-3 text-white"
              placeholder="SUBCRIBE"
            />
          </div>
        </form>
      </div>
      <div className="socialMedia border mt-3 p-5 text-center mb-4">
        <p>FOLLOW ME ON </p>
        <FaFacebook fontSize={25} />
        <FaTwitter fontSize={25} />
        <FaInstagram fontSize={25} />
        <FaYoutube fontSize={25} />
      </div>
    </>
  );
}
