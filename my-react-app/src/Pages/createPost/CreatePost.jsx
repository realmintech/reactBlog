import React from 'react';

export default function CreatePost() {
  return (
    <>
      <form action="" className="mt-3 container card">
        <h5 className="m-3">Add blog</h5>
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
        <div className="m-3 row">
          <div className="col-lg-6">
            <label htmlFor="">isFeatured</label>
            <input
              type="checkbox"
              name="isFeatured"
              className="mx-3"
              id=""
              placeholder="isFeatured"
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="">isPublished</label>
            <input
              type="checkbox"
              name="isPublished"
              id=""
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
