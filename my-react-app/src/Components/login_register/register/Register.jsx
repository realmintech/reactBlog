import React, { useState, useEffect } from "react";
import "../login/Login.css";
import Axios from "axios";

export default function Register() {
  const url = "http://localhost:3000/auth/register";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const submitUser = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(url, {
        username,
        password,
        email,
        confirmPassword,
      });
      setMessage("Registration Successful");
    } catch (error) {
      setMessage(error?.response?.data?.message || "Error occurred");
      // console.log(error?.response?.data?.message);
    }
  };
    useEffect(() => {
      let timeout;
      if (message) {
        timeout = setTimeout(() => {
          setMessage("");
        }, 30000); 
      }
      return () => clearTimeout(timeout);
    }, [message]);

  return (
    <>
      <div
        className="login_template justify-content-center align-items-center vh-100"
        style={{ width: "40%", margin: "auto", marginTop: "100px" }}
      >
        <div className="form_container bg-white p-5 ">
          {message && (
            <div
              className={`alert ${
                message.startsWith(Error) ? "alert-danger" : "alert-success"
              }`}
              role="alert"
            >
              {message}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}
          <form>
            <h3 className="text-center">Register</h3>
            <div className="mb-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="User name"
              />
            </div>
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
            <div className="mb-2">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button
                className="btn"
                onClick={submitUser}
                style={{
                  width: "100%",
                  backgroundColor: "navy",
                  color: "white",
                }}
              >
                Register
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
