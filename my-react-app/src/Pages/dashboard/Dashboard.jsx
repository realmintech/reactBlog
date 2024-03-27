import React from "react";
import { FaPager, FaHome, FaWindows, FaTools, FaRegEye, FaHeart } from "react-icons/fa";


export default function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="sidebar-sticky" style={{ height: "100%" }}>
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
                  <a className="nav-link" href="/Posts">
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
            <div>
              <h3>Popular Post</h3>
              <table className="table table-hover table-borderless">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date created</th>
                    <th>Action btn</th>
                    <th>Likes</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                    <td>
                      24 <FaHeart />
                    </td>
                    <td>
                      312 <FaRegEye />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                    <td>
                      24 <FaHeart />
                    </td>
                    <td>
                      312 <FaRegEye />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                    <td>
                      24 <FaHeart />
                    </td>
                    <td>
                      312 <FaRegEye />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                    <td>
                      24 <FaHeart />
                    </td>
                    <td>
                      312 <FaRegEye />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <button className="btn btn-primary">Delete</button>
                    </td>
                    <td>
                      24 <FaHeart />
                    </td>
                    <td>
                      312 <FaRegEye />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link" href="/Blog/1" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/About">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/Blogs">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/Contact">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/Blog/1">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/Home" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
