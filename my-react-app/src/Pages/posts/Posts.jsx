import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaRegEye } from 'react-icons/fa';

export default function Posts() {
  const [data, setData] = useState([]);

  const getPosts = async () => {
    const data = await axios.get('http://localhost:3000/blogs');
    const response = data?.data
    setData(response);
    console.log('THis is a new data',response)
    return response;
  };

  useEffect(() => {                                 
    getPosts();
  }, []);
  return (
    <>
      <div className="card my-3">
        <h3 className="m-3">Posts</h3>
        <table className="table table-hover table-border p-4 card-body my-3">
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.timestamp}</td>
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
    </>
  );
}