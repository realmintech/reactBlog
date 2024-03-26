import React from "react";
import { FaPager, FaHome, FaWindows, FaTools } from "react-icons/fa";


export default function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="sidebar-sticky" style={{height: '100%'}}>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <FaHome /> Home 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="\">
                    <FaWindows /> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="\">
                   <FaPager /> Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="\">
                    <FaTools /> Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            
          </main>
        </div>
      </div>
    </>
  );
}
