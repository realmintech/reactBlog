import MyPicture from '../../assets/passport.jpg';
import './Index.css';
export default function AboutMe() {
  return (
    <>
      <div className="card w-400 mt-3">
        <div className="card-body">
          <h2 className="card-title text-center">ABOUT ME</h2>
          <img className="card__img__top" src={MyPicture} alt="Card" />
          <p className="card-text">
            I am a front-end developer, passionate about converting ideas into
            reality.
          </p>
          <em className="px-5">System administrator</em>
        </div>
      </div>
    </>
  );
}
