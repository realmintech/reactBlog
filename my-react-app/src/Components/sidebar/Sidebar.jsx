import React from 'react';
import { FaHome, FaWindows, FaPager, FaEdit } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block sidebar">
            <div className="sidebar-sticky" style={{ height: '100%' }}>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <FaHome /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/blogInfo">
                    <FaWindows /> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/post">
                    <FaPager /> Create Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/edit_post">
                    <FaEdit /> Edit Post
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
