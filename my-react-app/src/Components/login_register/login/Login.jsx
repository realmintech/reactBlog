import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div
        className="login_template justify-content-center align-items-center vh-100"
        style={{ width: "40%", margin: "auto", marginTop: '100px' }}
      >
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Login</h3>
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
                  href="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>
              </button>
            </div>
            <p className="text-center" >
              Don't have an account? <a href="/Register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
