import React, { useState } from "react";
import "../login/Login.css";
import { useDispatch } from "react-redux";
import { register } from "../../../actions/userActions";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      dispatch(register(email, username, password, confirmPassword));
    }
  };

  // useEffect(() => {
  //   let timeout;
  //   if (message) {
  //     timeout = setTimeout(() => {
  //       setMessage("");
  //     }, 30000);
  //   }
  //   return () => clearTimeout(timeout);
  // }, [message]);

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
            <div className="d-grid" >
              <button
                className="btn"
                onClick={submitHandler}
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
