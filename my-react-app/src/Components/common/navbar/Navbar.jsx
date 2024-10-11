import React from 'react';
import './Navbar.css';
import Logo from '../../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/userActions';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const isAdmin = userInfo?.token?.user?.role === 'admin';
  const isUser = userInfo?.token?.user?.role === 'guest';
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <header className="header">
        <div className="socialIcons">
          <Link to="https://x.com/Adesina20638088">
            <FaTwitter
              style={{ marginRight: '10px', fontSize: '25px', color: 'black' }}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/mariam-adesina-temitope">
            <FaLinkedin
              style={{ fontSize: '25px', marginRight: '10px', color: 'black' }}
            />
          </Link>
          <FaFacebook style={{ marginRight: '10px', fontSize: '25px' }} />
          <FaInstagram fontSize={25} style={{ marginRight: '10px' }} />
        </div>
        <div className="headerWord">
          <img src={Logo} alt="letsBlog" className="lets_blog" />
        </div>
      </header>
      <Navbar expand="lg" className="bg-body-white" bg="white" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {userInfo && isUser ? (
              <>
                <button className="btn" style={{ backgroundColor: 'navy' }}>
                  <Link
                    onClick={logoutHandler}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Logout
                  </Link>
                </button>
              </>
            ) : userInfo && isAdmin ? (
              <>
                <button className="btn" style={{ backgroundColor: 'navy' }}>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Dashboard
                  </Link>
                </button>
                <button className="btn" style={{ backgroundColor: 'navy' }}>
                  <Link
                    onClick={logoutHandler}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Logout
                  </Link>
                </button>
              </>
            ) : (
              <button className="btn" style={{ backgroundColor: 'navy' }}>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Login
                </Link>
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
