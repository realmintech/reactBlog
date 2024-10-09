import MyPicture from '../../assets/passport.jpg';
import './Index.css';
export default function AboutMe() {
  return (
    <>
      <div className="card  mt-3">
        <div className="card-body">
          <h2 className="card-title text-center">ABOUT ME</h2>
          <div className="image___container">
          <img className="card__img__top" src={MyPicture} alt="Card" />
          </div>
          <p className="card-text">
            I am a front-end developer, passionate about converting ideas into
            reality.
          </p>
          <p className="p___bottom">System administrator</p>
        </div>
      </div>
    </>
  );
}
