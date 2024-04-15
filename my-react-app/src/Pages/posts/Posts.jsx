import React from 'react';
import { FaEdit, FaTrash, FaRegEye  } from 'react-icons/fa';

export default function Posts() {
  const data = [
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },

    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },

    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },

    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },

    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
    {
      title: 'technology',
      author: 'mariam',
      category: 'technical',
      date_created: 'June 12, 2024',
    },
  ];
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
            {data.map((item, index) => (
              <tr>
                <td key={index}>{index}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.category}</td>
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
    </>
  );
}
