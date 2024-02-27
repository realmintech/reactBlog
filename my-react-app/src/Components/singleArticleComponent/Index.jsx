import BeautyPic from '../../assets/carousel.webp';
import './Index.css'

export default function SingleArticleComponet() {
  return (
    <>
      <div className='firstSection'>
        <h3 className='text-center pt-4'>BEAUTY OF NATURE</h3>
        <p className='text-center'>
          <hr />
          <em>July-12-2024</em>
          <hr />
        </p>
        <img src={BeautyPic} alt='lady' className='beautyPic mt-5' />
        <p>
          Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit
          amet, consectetur Nulla fringilla purus at leo dignissim congue.
          Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl
          aliquam.
          <br />
          <p className='read_more_link'>Read More....</p>
        </p>
      </div>
    </>
  );
}
