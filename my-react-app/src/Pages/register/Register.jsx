import React, { useState, useEffect } from 'react';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(email, username, password, confirmPassword, navigate));
  };

  useEffect(() => {
    if (userInfo?.error) {
      setShowAlert(true);
    }
  }, [userInfo?.error]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="container login_template justify-content-center align-items-center vh-100">
        <div className="form_container bg-white p-5 ">
          <form>
            <h3 className="text-center">Register</h3>
            {showAlert && (
              <div
                className={`alert ${
                  userInfo.error ? 'alert-danger' : 'alert-success'
                } alert-dismissible fade show`}
                role="alert"
              >
                {userInfo.error
                  ? userInfo.error
                  : 'You have successfully registered'}
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeAlert}
                  aria-label="Close"
                ></button>
              </div>
            )}

            <div className="mb-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="User name"
              />
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Email"
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
                <label htmlFor="Confirm Password">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="d-grid">
              <button
                className="btn"
                onClick={submitHandler}
                style={{
                  width: '100%',
                  backgroundColor: 'navy',
                  color: 'white',
                }}
              >
                Register
              </button>
            </div>
            <p className="text-center">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
