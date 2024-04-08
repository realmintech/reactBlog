import React from 'react';
import { FaHome, FaWindows, FaPager, FaEdit } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
      <nav className="d-md-block sidebar">
        <div className="sidebar-sticky" style={{ height: '100%' }}>
          <ul className="nav flex-column pt-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">
                <FaHome /> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="/dashboard/dashboardContent"
              >
                <FaWindows /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard/post">
                <FaPager /> Create Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/dashboard/category">
                <FaEdit /> Category
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
