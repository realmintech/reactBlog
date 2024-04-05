import React from 'react';

export default function EditPost() {
  return (
    <>
      <form action="" className="m-3 container">
        <h5 className="m-3">Edit blog</h5>
        <div className="m-3">
          <input type="text" placeholder="Title" className="form-control" />
        </div>
        <div className="m-3">
          <input
            type="file"
            src=""
            alt=""
            className="form-control"
            placeholder="Chose image"
          />
        </div>
        <div className="m-3">
          <select name="options" id="" className="form-select">
            <option selected>Category</option>
            <option value="1">Education</option>
            <option value="2">Lifestyle</option>
            <option value="3">Technology</option>
            <option value="4">Art</option>
            <option value="5">Food</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          cols="60"
          rows="10"
          className="m-3 form-control"
          placeholder="Description"
        ></textarea>
        <div>
          <p>Time stamp: </p>
          <label htmlFor="">isFeatured</label>
          <input
            type="checkbox"
            name="isFeatured"
            id=""
            placeholder="isFeatured"
          />
          <label htmlFor="">isPublished</label>
          <input
            type="checkbox"
            name="isPublished"
            id=""
            placeholder="isPublished"
          />
        </div>
        <div>
          <button
            type="submit"
            className="m-3 btn"
            style={{ width: '100%', background: 'navy', color: 'white' }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
