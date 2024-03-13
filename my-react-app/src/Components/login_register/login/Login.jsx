import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <div className="login_template d-flex justify-content-center align-items-center vh-100 bg-secondary">
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Login</h3>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <span>
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <FaLock />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
              />
              <label htmlFor="Remember me">Remember me</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" style={{ width: "100%" }}>
                <a
                  href="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>
              </button>
            </div>
            <p>
              Don't have an account? <a href="/Register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
