import React from 'react';
import {
  FaBlog,
  FaEdit,
  FaPodcast,
  FaRegEye,
  FaTrash,
  FaUser,
} from 'react-icons/fa';

export default function DashboardContent() {
  const data = [
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },

    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
  ];
  return (
    <>
      <div>
        <div>
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 px-md-4 card mt-3"
          >
            <div className="container-fluid my-4">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="cards">
                    <div class="card bg-primary text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Blogs</h5>
                        <h6 className="card-subtitle mb-2">
                          <span>
                            <FaBlog />
                          </span>
                          126
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div
                    className="cards"
                    style={{
                      boxShadow:
                        'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
                    }}
                  >
                    <div className="card bg-success text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Users</h5>
                        <h6 className="card-subtitle mb-2">
                          <span>
                            <FaUser />
                          </span>
                          23
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="cards">
                    <div className="card bg-danger text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Post</h5>
                        <h6 className="card-subtitle mb-2">
                          <FaPodcast />
                          40
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                boxShadow:
                  'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
              }}
            >
              <h3 className="m-3">Popular Post</h3>
              <table className="table table-hover table-border p-4">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{item.title}</td>
                      <td>{item.Category}</td>
                      <td>{item.date_created}</td>
                      <td>
                        <FaEdit
                          style={{ fontSize: '1.25rem' }}
                          className="text-primary"
                          href="/dashboard/viewPost"
                        />
                        <FaTrash
                          style={{ fontSize: '1.25rem' }}
                          className="text-danger mx-2"
                        />
                        <FaRegEye
                          style={{ fontSize: '1.25rem' }}
                          className="text-success"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-end mt-5">
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
          </main>
        </div>
      </div>
    </>
  );
}
