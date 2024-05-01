import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../../actions/userActions';
import {
  categoryAction,
  deleteCategory,
  editCategory,
  getCategory,
} from '../../actions/categoryAction';

export default function Category() {
  const [name, setName] = useState('');
  const [modal, setModal] = useState(false);
  const [editItemId, setEditItemId] = useState('');
  const [editName, setEditName] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);
  const user = useSelector((state) => state.singleUser.user);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    if (data && Array.isArray(data.category)) {
      data.category.forEach((item) => {
        if (!user || user._id !== item.author) {
          dispatch(fetchUserById(item.author));
        }
      });
    }
  }, [dispatch, data, user]);

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const handleEdit = (itemId, itemName) => {
    setEditItemId(itemId);
    setEditName(itemName);
    setModal(true);
  };

  const handleSaveChanges = () => {
    dispatch(editCategory(editItemId, editName));
    setModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(categoryAction(name));
    setName('');
    dispatch(getCategory());
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
                <th>Category</th>
                <th>Author</th>
                <th>Date created</th>
                <th>Date updated</th>
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
                    <td>{moment(item.updatedAt).format('llll')}</td>
                    <td>
                      <FaEdit
                        style={{ fontSize: '1.25rem', cursor: 'pointer' }}
                        className="text-primary"
                        onClick={() => handleEdit(item._id, item.name)}
                      />
                      <FaTrash
                        style={{ fontSize: '1.25rem', cursor: 'pointer' }}
                        className="text-danger mx-2"
                        onClick={() => handleDeleteCategory(item._id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </form>

      {modal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="form-control"
                />
                <input
                  type="hidden"
                  value={editItemId}
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
