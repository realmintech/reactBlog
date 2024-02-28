import './Index.css';
import Desert from "../../assets/image5.png";

export default function CategoryComponent() {
  return (
    <>
      <div className="imgWithBanner border">
        <img className="img_in_card" src={Desert} alt="forest" />
        <h3>
          BANNER ADS <br /> 300 * 250
        </h3>
      </div>
      <div className="category">
        <h3>CATEGORIES</h3>
        <p>Art</p>
        <hr />
        <p>Food</p>
        <hr />
        <p>Lifestyle</p>
        <hr />
        <p>Music</p>
        <hr />
        <p>Top</p>
        <hr />
        <p>Travel</p>
        <hr />
      </div>
    </>
  );
}
