import React, { useState } from "react";
import "../login/Login.css";
import Axios from "axios";
import Success from "../../toast/Toast";
import Warning from "../../toast/Warning";

export default function Register() {
  const url = "http://localhost:8080/auth/register";
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const submitUser = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(url, {
        username,
        password,
        email,
      });
      if (response.status === 200) {
        console.log("You have successfully logged in");
      } else {
        console.log("There is error in your input");
      }
      console.log("this is response", response);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="d-grid">
              {isRegister ? <Success /> : <Warning />}
              <button
                className="btn"
                onClick={submitUser}
                onSubmit={() => setIsRegister(true)}
                style={{ width: "100%", backgroundColor: "navy" }}
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
