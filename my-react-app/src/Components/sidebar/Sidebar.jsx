import React from 'react';
import { FaHome, FaWindows, FaPager, FaEdit, FaBlog } from 'react-icons/fa';
import ImageOverLay from '../imageOverlay/ImageOverLay';

export default function Sidebar() {
  return (
    <>
      <nav className="d-md-block sidebar">
        <div className="sidebar-sticky" style={{ height: '100%' }}>
          <ul className="nav flex-column pt-4">
          <ImageOverLay />
            <li className="nav-item mt-3">
              <a className="nav-link text-dark" href="/">
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard">
                <FaWindows /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard/create_post">
                <FaPager /> Create Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard/category">
                <FaEdit /> Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard/posts">
                <FaBlog /> Posts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
