import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function Category() {
  return (
    <>
      <form action="" className="mt-3 container card">
        <h5 className="m-3">Category page</h5>
        <div className="">
          <input type="text" placeholder="Category" className="form-control" />
          <button
            type="submit"
            className="btn"
            style={{ width: '99%', background: 'navy', color: 'white' }}
          >
            Submit
          </button>
        </div>
        <div className="card my-5">
          <h3 className="m-3">Category</h3>
          <table className="table table-hover table-border p-4">
            <thead>
              <tr>
                <th>Index</th>
                <th>Category</th>
                <th>Author</th>
                <th>Date created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Technical</td>
                <td>Mariam</td>
                <td>June, 12 2013</td>
                <td>
                  <FaEdit
                    style={{ fontSize: '1.25rem' }}
                    className="text-primary"
                  />
                  <FaTrash
                    style={{ fontSize: '1.25rem' }}
                    className="text-danger mx-2"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Technical</td>
                <td>Mariam</td>
                <td>June, 12 2013</td>
                <td>
                  <FaEdit
                    style={{ fontSize: '1.25rem' }}
                    className="text-primary"
                  />
                  <FaTrash
                    style={{ fontSize: '1.25rem' }}
                    className="text-danger mx-2"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Technical</td>
                <td>Mariam</td>
                <td>June, 12 2013</td>
                <td>
                  <FaEdit
                    style={{ fontSize: '1.25rem' }}
                    className="text-primary"
                  />
                  <FaTrash
                    style={{ fontSize: '1.25rem' }}
                    className="text-danger mx-2"
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Technical</td>
                <td>Mariam</td>
                <td>June, 12 2013</td>
                <td>
                  <FaEdit
                    style={{ fontSize: '1.25rem' }}
                    className="text-primary"
                  />
                  <FaTrash
                    style={{ fontSize: '1.25rem' }}
                    className="text-danger mx-2"
                  />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Technical</td>
                <td>Mariam</td>
                <td>June, 12 2013</td>
                <td>
                  <FaEdit
                    style={{ fontSize: '1.25rem' }}
                    className="text-primary"
                  />
                  <FaTrash
                    style={{ fontSize: '1.25rem' }}
                    className="text-danger mx-2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
}
