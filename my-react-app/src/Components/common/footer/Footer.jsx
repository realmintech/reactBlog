import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>
          <img src={Logo} alt="letsBlog" className='text-white' text="white" />
          </Col>
          <Col sm={6} md={4} lg={3}>
            <strong>SUBCRIPTION</strong>
            <input type="email" name="email" id="email" placeholder='Your email address' border="none"/>
            <button type="submit" className='my-3 mx-4 px-3 text-center'>SUBCRIBE</button>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <h5>Recent posts</h5>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <h5>Our company</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Blogs">Blogs</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr />
            <p>&copy; 2024 Let's Blog. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
