import React, { useState } from 'react';
import { editBlog } from '../../actions/createPostAction';
import { useDispatch } from 'react-redux';

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState();
  const [editName, setEditName] = useState();
  const [editTitle, setEditTitle] = useState();
  const [editDescription, setEditDescription] = useState();
  const [editImage, setEditImage] = useState();

  const dispatch = useDispatch();
  const handleSaveChanges = () => {
    dispatch(editBlog(editDescription, editName, editImage, editTitle));
    setModal(false);
  };
  return (
    <div>
      <div className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Post</h5>
              <button
                type="button"
                value={modal}
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
                value={editId}
                onChange={(e) => setEditId(e.target.value)}
                className="form-control"
              />
              <input
                type="text"
                placeholder="Image"
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
    </div>
  );
}
