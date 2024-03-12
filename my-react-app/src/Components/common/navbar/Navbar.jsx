import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMoon,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

export default function CustomNavbar() {
  return (
    <>
      <header className="header">
        <div className="socialIcons">
          <FaFacebook style={{ marginRight: "10px", fontSize: "25px" }} />
          <FaTwitter style={{ marginRight: "10px", fontSize: "25px" }} />
          <FaLinkedin style={{ marginRight: "10px", fontSize: "25px" }} />
          <FaInstagram size={20} />
        </div>
        <div className="headerWord">
          <img src={Logo} alt="letsBlog" className="lets_blog" />
        </div>
        <div className="moon_btn">
          <FaMoon size={20} />
        </div>
      </header>
      <Navbar expand="lg" className="bg-body-white" bg="white" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Blogs">Blogs</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/blog/1">Blog</Nav.Link>
            </Nav>
            <button className="btn" style={{backgroundColor: 'navy'}}>
              <a href="/Login" style={{textDecoration: 'none', color: 'white'}}>Login</a>
            </button>
            <FaSearch />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
