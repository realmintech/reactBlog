import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../actions/userActions';
import {
  categoryAction,
  deleteCategory,
  getCategory,
} from '../../actions/categoryAction';

export default function Category() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);
  const user = useSelector((state) => state.singleUser.user);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };
  useEffect(() => {
    if (data && Array.isArray(data.category)) {
      data.category.forEach((item) => {
        if (!user || user._id !== item.author) {
          dispatch(fetchUserById(item.author));
        }
      });
    }
  }, [dispatch, data, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(categoryAction(name));
    dispatch(getCategory());

  };

  return (
    <>
      <form className='mt-3 container card'>
        <h5 className='m-3'>Category page</h5>
        <div className=''>
          <input
            type='text'
            value={name}
            placeholder='Category'
            onChange={(e) => setName(e.target.value)}
            className='form-control'
          />
          <button
            type='submit'
            className='btn'
            onClick={handleSubmit}
            style={{ width: '99%', background: 'navy', color: 'white' }}
          >
            Submit
          </button>
        </div>
        <div className='card my-5'>
          <h3 className='m-3'>Category</h3>
          <table className='table table-hover table-border p-4'>
            <thead>
              <tr>
                <th>Category</th>
                <th>Author</th>
                <th>Date created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data.category) &&
                data.category.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      {user && user._id === item.author ? user.username : ''}
                    </td>
                    <td>{moment(item.createdAt).format('llll')}</td>
                    <td>
                      <FaEdit
                        style={{ fontSize: '1.25rem' }}
                        className='text-primary'
                      />
                      <FaTrash
                        style={{ fontSize: '1.25rem' }}
                        className='text-danger mx-2'
                        onClick={() => handleDeleteCategory(item._id)}
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
