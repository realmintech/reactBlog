import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
          <FaInstagram size={20} />
        </div>
        <div className="headerWord">
          <img src={Logo} alt="letsBlog" />
        </div>
        <div className="searchBtn">
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
              <NavDropdown title="blogs" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Blogs">Single posts</NavDropdown.Item>
                <NavDropdown.Item href="#">Pages</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">category</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            <FaSearch />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
