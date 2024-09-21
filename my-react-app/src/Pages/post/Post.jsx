import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../actions/categoryAction';
import { createBlog, getBlog } from '../../actions/createPostAction';

export default function Post() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const data = useSelector((state) => state.category);
  const postedData = useSelector((state) => state.post);
  console.log('postedData', postedData);
  const closeAlert = () => {
    setShowAlert(false);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    dispatch(
      createBlog(
        title,
        imageUrl,
        category,
        tag,
        isFeatured,
        isPublished,
        description
      )
    );
    dispatch(getBlog());
  };

  return (
    <>
      <form onSubmit={handleSubmitPost} className="mt-3 container card">
        {showAlert && (
          <div
            className={`alert ${
              postedData.error ? 'alert-danger' : 'alert-success'
            } alert-dismissible fade show`}
            role="alert"
          >
            {postedData
              ? postedData.postedData
              : 'You have logged in successfully'}
            <button
              type="button"
              className="btn-close"
              onClick={closeAlert}
              aria-label="Close"
            ></button>
          </div>
        )}
        <h5 className="m-3">Add blog</h5>
        <div className="m-3">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="my-3 mx-1 row">
          <div className="col-lg-6">
            <select
              name="options"
              className="form-select"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {data.category &&
                data.category.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="tags-input"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="form-control"
              placeholder="Tags"
            />
          </div>
        </div>
        <div className="m-3 row">
          <div className="col-lg-6">
            <label htmlFor="isFeatured">isFeatured</label>
            <input
              type="checkbox"
              name="isFeatured"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="mx-3"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="isPublished">isPublished</label>
            <input
              type="checkbox"
              name="isPublished"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="mx-3"
            />
          </div>
        </div>
        <textarea
          cols="8"
          rows="10"
          className="m-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ borderRadius: '10px', border: '1px solid gray' }}
          placeholder="Description"
        ></textarea>
        <div></div>
        <div>
          <button
            type="submit"
            className="m-3 btn"
            style={{ width: '97%', background: 'navy', color: 'white' }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
