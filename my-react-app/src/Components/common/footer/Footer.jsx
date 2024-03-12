import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../../assets/footerLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <Container fluid>
          <Row>
            <Col sm={6} md={4} lg={3}>
              <img
                src={Logo}
                alt="letsBlog"
                className="text-white logo"
                text="white"
              />
            </Col>
            <Col sm={6} md={4} lg={3}>
              <strong>SUBCRIPTION</strong>
              <br />
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  border="none"
                  className="subcribeInput text-center"
                />
                <br />
                <input
                  className="footer_subcribe mt-3 text-center"
                  placeholder="SUBCRIBE"
                />
              </div>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <h5>Recent posts</h5>
              <p>
                BEAUTY OF NATURE <br /> <em>July 22, 2015</em>{" "}
              </p>
              <p>
                FASHION MODEL SHOOT <br /> <em>July 22, 2015</em>
              </p>
              <p>
                GOLDEN SNOW LAND <br /> <em>July 22, 2015</em>
              </p>
            </Col>
            <Col sm={6} md={4} lg={3}>
              <h5>Our company</h5>
              <ul className="list-unstyled footer_links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Blogs">Blogs</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className="footerLine">
              <div className="copy_right">
                <p>&copy; 2024 Let's Blog. All rights reserved.</p>
              </div>
              <div className="footer_link">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Blogs">Blog</a>
                <a href="/Contact">Contact</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
