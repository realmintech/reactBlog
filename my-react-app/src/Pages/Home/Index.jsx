import Carousel from 'react-bootstrap/Carousel';
import backgroundImage from "../../assets/bacgroundImage1.jpg"
import SecondCarousel from "../../assets/carousel.webp"
import ThirdCarousel from "../../assets/carousel2.png"

function Index() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={backgroundImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={SecondCarousel}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70"
          src={ThirdCarousel}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Index;