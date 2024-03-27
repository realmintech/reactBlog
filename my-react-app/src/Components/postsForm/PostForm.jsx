import React from "react";

export default function PostForm() {
  return (
    <>
      <form action="" className="m-3">
        <h5 className="m-3">Add blog</h5>
        <div className="m-3">
          <input type="text" placeholder="Title" />
        </div>
        <div className="m-3">
          <input type="file" src="" alt="" placeholder="Chose image" />
        </div>
        <div className="m-3">
            <label htmlFor="" className="m-1">Category</label>
          <select name="options" id="">
            <option value="">Education</option>
            <option value="">Lifestyle</option>
            <option value="">Technology</option>
            <option value="">Art</option>
            <option value="">Food</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          cols="70"
          rows="10"
          className="m-3"
          placeholder="Description"
        ></textarea>
        <div>
          <button type="submit" className="m-3" style={{width:'40%', background: 'navy', color: 'white'}}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
