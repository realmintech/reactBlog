import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../actions/categoryAction';
import { createBlog } from '../../actions/createPostAction';

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [isFeatured, setIsFeatured] = useState(false)
  const [isPublished, setIsPublished] = useState(false)
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const data = useSelector((state) => state.category);
  let formData = new FormData();
  const onfileChange = (e) => {
   if(e.target && e.target.files) {
    formData.append('file', e.target.files)
   }
  }

  const handleSubmitPost = (e) => {
    e.preventDefault();
    let done = dispatch(createBlog(title,image,category,tag,isFeatured, isPublished,description))
    console.log(done)
  }
  
  return (
    <>
      <form action="" className="mt-3 container card">
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
            type="file"
            src=""
            alt=""
            onChange={onfileChange}
            value={image}
            onChangeCapture={(e) => setImage(e.target.value)}
            className="form-control"
            placeholder="Chose image"
          />
        </div>
        <div className="my-3 mx-1 row">
          <div className="col-lg-6">
            <select name="options" id="" className="form-select">
              {Array.isArray(data.category) &&
                data.category.map((item) => (
                  <option
                    key={item}
                    value={category}
                    onSelect={(e) => setCategory(e.target.value)}
                  >
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
              data-role="tagsinput"
              placeholder="Tags"
            />
          </div>
        </div>
        <div className="m-3 row">
          <div className="col-lg-6">
            <label htmlFor="">isFeatured</label>
            <input
              type="checkbox"
              name="isFeatured"
              className="mx-3"
              id=""
              value={isFeatured}
              onClick={(e) => setIsFeatured(e.target.value)}
              placeholder="isFeatured"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="">isPublished</label>
            <input
              type="checkbox"
              name="isPublished"
              id=""
              value={isPublished}
              onClick={(e) => setIsPublished(e.target.value)}
              className="mx-3"
              placeholder="isPublished"
            />
          </div>
        </div>
        <textarea
          name=""
          id=""
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
            className="m-3 btn"
            style={{ width: '97%', background: 'navy', color: 'white' }}
            onClick={handleSubmitPost}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
