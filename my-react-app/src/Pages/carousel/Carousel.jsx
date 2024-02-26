import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import backgroundImage from "../../assets/bacgroundImage1.jpg";
import SecondCarousel from "../../assets/carousel.webp";
import ThirdCarousel from "../../assets/peachgirl.png";

const data = [
  {
    images: backgroundImage,
    title: "First slide label",
    msg: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    images: SecondCarousel,
    title: "Second slide label",
    msg: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    images: ThirdCarousel,
    title: "Third slide label",
    msg: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
];

function ImageScroll() {
  const arrayDataItems = data.map((item, index) => (
    <Carousel.Item key={index}>
      <img
        className="d-block w-100 h-40 pictureReset"
        src={item.images}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>{item.title}</h5>
        <p>{item.msg}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return <Carousel data-bs-theme="white">{arrayDataItems}</Carousel>;
}

export default ImageScroll;
