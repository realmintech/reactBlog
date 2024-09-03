import React, { useState } from 'react';
import {
  FaBlog,
  FaEdit,
  FaPodcast,
  FaRegEye,
  FaTrash,
  FaUser,
} from 'react-icons/fa';
import './DashboardContent.css';
const itemsPerPage = 5;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default function DashboardContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    { title: 'Science', Category: 'Research', date_created: 'July 15, 2014' },
    { title: 'Health', Category: 'Wellness', date_created: 'August 09, 2015' },
    {
      title: 'Education',
      Category: 'Learning',
      date_created: 'September 11, 2016',
    },
    {
      title: 'Environment',
      Category: 'Nature',
      date_created: 'October 19, 2017',
    },
    {
      title: 'Politics',
      Category: 'Governance',
      date_created: 'November 23, 2018',
    },
    {
      title: 'Culture',
      Category: 'Society',
      date_created: 'December 25, 2019',
    },
    { title: 'Art', Category: 'Creativity', date_created: 'January 01, 2020' },
    {
      title: 'Travel',
      Category: 'Exploration',
      date_created: 'February 14, 2021',
    },
    { title: 'Food', Category: 'Cuisine', date_created: 'March 17, 2022' },
    {
      title: 'Technology',
      Category: 'Technical',
      date_created: 'June 23, 2013',
    },
    { title: 'Science', Category: 'Research', date_created: 'July 15, 2014' },
    { title: 'Health', Category: 'Wellness', date_created: 'August 09, 2015' },
    {
      title: 'Education',
      Category: 'Learning',
      date_created: 'September 11, 2016',
    },
    {
      title: 'Environment',
      Category: 'Nature',
      date_created: 'October 19, 2017',
    },
    {
      title: 'Politics',
      Category: 'Governance',
      date_created: 'November 23, 2018',
    },
    {
      title: 'Culture',
      Category: 'Society',
      date_created: 'December 25, 2019',
    },
    { title: 'Art', Category: 'Creativity', date_created: 'January 01, 2020' },
    {
      title: 'Travel',
      Category: 'Exploration',
      date_created: 'February 14, 2021',
    },
    { title: 'Food', Category: 'Cuisine', date_created: 'March 17, 2022' },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
                    <div className="card bg-primary text-white">
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
                  {paginatedItems.map((item, index) => (
                    <tr key={index}>
                      <td>{startIndex + index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.Category}</td>
                      <td>{item.date_created}</td>
                      <td>
                        <FaEdit
                          style={{ fontSize: '1.25rem' }}
                          className="text-primary"
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </main>
        </div>
      </div>
    </>
  );
}
