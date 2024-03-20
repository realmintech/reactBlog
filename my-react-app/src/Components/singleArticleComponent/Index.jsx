import BeautyPic from '../../assets/carousel.webp';
import './Index.css'

export default function SingleArticleComponet() {
  return (
    <>
      <div className="firstSection">
        <h3 className="text-center pt-4">BEAUTY OF NATURE</h3>
        <div className="text-center">
          <p className='today_date'>July-12-2024</p>
        </div>
        <img src={BeautyPic} alt="lady" className="beautyPic mt-5" />
        <p>
          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit
          amet, consectetur Nulla fringilla purus at leo dignissim congue.
          Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
          aliquam.
        </p>
          <a className="read_more_link text-decoration-none" href="/Blogs">
            Read More...
          </a>
      </div>
    </>
  );
}
