import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction, getCategory } from '../../actions/categoryAction';

export default function Category() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const d = useSelector((state) => state.category);
  console.log('this is data', d);
  const data = [{name: 'ade',
  category: 'food',
author: 'tade',
createdAt: 'Jan 34 '
}]

  // Fetch categories on component mount
useEffect(() => {
  dispatch(getCategory());
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(categoryAction(name));
  };

  return (
    <>
      <form className="mt-3 container card">
        <h5 className="m-3">Category page</h5>
        <div className="">
          <input
            type="text"
            value={name}
            placeholder="Category"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
          <button
            type="submit"
            className="btn"
            onClick={handleSubmit}
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.createdAt}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
}
