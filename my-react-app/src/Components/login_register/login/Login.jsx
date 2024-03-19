import React, { useState } from "react";
import Axios from 'axios';
import "./Login.css";

export default function Login() {
  const url ='';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(url, {
        email, password
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        className="login_template justify-content-center align-items-center vh-100"
        style={{ width: "40%", margin: "auto", marginTop: "100px" }}
      >
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Login</h3>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="d-grid">
              <button
                className="btn"
                onClick={login} 
                style={{ width: "100%", backgroundColor: "navy" }}
              >
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
