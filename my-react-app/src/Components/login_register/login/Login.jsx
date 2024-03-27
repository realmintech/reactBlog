import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../../../actions/userActions";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div
        className="login_template justify-content-center align-items-center vh-100"
        style= {{ width: "40%", margin: "auto", marginTop: "100px" }}
      >
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Login</h3>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button
                className="btn"
                onClick={submitHandler}
                style={{
                  width: "100%",
                  backgroundColor: "navy",
                  color: "white",
                }}
              >
                <Navigate to='' />
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have an account? <a href="/Register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
