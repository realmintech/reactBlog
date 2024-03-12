import BeautyIdol from "../../assets/carousel2.png";
import "./Index.css";
export default function AboutMe() {
  return (
    <>
      <div className="card w-400 mt-3">
        <div className="card-body">
          <h2 className="card-title text-center">ABOUT ME</h2>
          <img className="card__img__top" src={BeautyIdol} alt="Card" />
          <p className="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <em className="px-5">Lorem ipsum dolor sit</em>
        </div>
      </div>
    </>
  );
}
