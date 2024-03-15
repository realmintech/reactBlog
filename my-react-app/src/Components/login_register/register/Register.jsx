import React from "react";
import '../login/Login.css';

export default function Register() {
  return (
    <>
      <div
        className="login_template justify-content-center align-items-center vh-100"
        style={{ width: "40%", margin: "auto", marginTop: "100px" }}
      >
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Register</h3>
            <div className="mb-2">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button
                className="btn"
                style={{ width: "100%", backgroundColor: "navy" }}
              >
                <a
                  href="/Login"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Register
                </a>
              </button>
            </div>
            <p className="text-center">
              Already have an account? <a href="/Login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
