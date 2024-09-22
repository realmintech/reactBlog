import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FaEdit, FaTrash, FaRegEye } from 'react-icons/fa';
import { deleteBlog, getBlog } from '../../actions/createPostAction';
import { useDispatch, useSelector } from 'react-redux';
import { editBlog } from '../../actions/createPostAction';
import { HttpStatusCode } from 'axios';
import { fetchUserById } from '../../actions/userActions';

export default function Posts() {
  const [toast, setToast] = useState(false)
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editName, setEditName] = useState();
  const [editTitle, setEditTitle] = useState();
  const [editDescription, setEditDescription] = useState();
  const [editImage, setEditImage] = useState();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.post);
  const user = useSelector((state) => state.userInfo);
  const results = data.returnData;
   console.log('result: ', results)
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);
  

    useEffect(() => {
      if (toast) {
        const timeout = setTimeout(() => {
          setToast(false);
        }, 3000); 
        return () => clearTimeout(timeout);
      }
    }, [toast]);

  const handleDelete = (itemId) => {
    dispatch(deleteBlog(itemId)).then(() => {
    dispatch(getBlog())
    setToast(true)
    })
  };

  const handleEdit = async (postId,category,slug) => {
    const response = await fetchUserById(postId, category, slug);
    setEditId(response._id);
    setEditTitle(editTitle);
    setEditName(editName);
    setEditDescription(editDescription);
    setEditImage(editImage);
    setModal(true);
  };

  const handleSaveChanges = () => {
    dispatch(editBlog(editDescription, editName, editImage, editTitle));
    setModal(false);
  };

  return (
    <>
      <div className="card my-3">
        <h3 className="m-3">Posts</h3>
      {toast && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {HttpStatusCode === 200 && 'Blog post deleted successfully'
            ? 'Not allowed'
            : 'Blog post deleted successfully'}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setToast(false)}
          ></button>
        </div>
      )}
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
            {results &&
              results.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td> {user && user._id === item.author ? user.username : ''}</td>
                  <td>{item.category}</td>
                  <td>{moment(item.timestamp).format('llll')}</td>
                  <td>
                    <FaEdit
                      style={{ fontSize: '1.25rem' }}
                      className="text-primary"
                      href="/dashboard/viewPost"
                      onClick={() =>
                        handleEdit(
                          item._id,
                        )
                      }
                    />
                    <FaTrash
                      style={{ fontSize: '1.25rem' }}
                      className="text-danger mx-2"
                      onClick={() => handleDelete(item._id)}
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

      {modal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Post</h5>
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
                <input type="hidden" value={editId} className="form-control" />
                <input
                  type="text"
                  placeholder='Input image URL here'
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                  className="form-control"
                />
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="form-control"
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  style={{ color: 'white', backgroundColor: 'navy' }}
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