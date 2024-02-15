import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaLinkedin, } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <header className='header'>
        <div className='socialIcons'>
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
          <FaInstagram size={20} />
        </div>
        <div className='headerWord'>
          <h2 className='letterHeaded'>Let's blog</h2>
        </div>
        <div className='searchBtn'><FaSearch size={20} /></div>
      </header>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          
        </ul>
      </nav> 
    </>
  );
}
