import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function BlogInfo() {
  return (
    <>
      <div>
        <div>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="container m-4">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="cards">
                    <div class="card bg-primary text-white">
                      <div class="card-body text-center">
                        <h5 class="card-title">Blogs</h5>
                        <h6 class="card-subtitle mb-2">Number of blogs</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="cards">
                    <div class="card bg-success text-white">
                      <div class="card-body text-center">
                        <h5 class="card-title">Users</h5>
                        <h6 class="card-subtitle mb-2">Number of User</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="cards">
                    <div class="card bg-danger text-white">
                      <div class="card-body text-center">
                        <h5 class="card-title">Post</h5>
                        <h6 class="card-subtitle mb-2">Number of Posts</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Popular Post</h3>
              <table className="table table-hover table-border">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date created</th>
                    <th>Action btn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Technology</td>
                    <td>Technical</td>
                    <td>June, 12 2013</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
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
