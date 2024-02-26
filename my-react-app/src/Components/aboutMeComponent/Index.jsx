import BeautyIdol from '../../assets/carousel2.png';
import './Index.css';
export default function AboutMe() {
  return (
    <>
      <div class='card w-400'>
        <div class='card-body'>
          <h2 class='card-title text-center'>ABOUT ME</h2>
          <img class='card__img__top' src={BeautyIdol} alt='Card' />
          <p class='card-text'>
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <em className='px-5'>Lorem ipsum dolor sit</em>
        </div>
      </div>
    </>
  );
}
