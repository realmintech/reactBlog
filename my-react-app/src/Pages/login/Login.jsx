import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { login } from '../../actions/userActions';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    try {
      if (userLogin.error) {
        setShowAlert(true);
      }
    } catch (error) {}
  }, [userLogin.error]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div
        className='container login_template justify-content-center align-items-center vh-100'
        style={{ margin: 'auto', marginTop: '100px' }}
      >
        <div className='form_container bg-white p-5 '>
          <form>
            <h3 className='text-center'>Login</h3>
            {showAlert && (
              <div
                className={`alert ${
                  userLogin.error ? 'alert-danger' : 'alert-success'
                } alert-dismissible fade show`}
                role='alert'
              >
                {userLogin.error
                  ? userLogin.error
                  : 'You have logged in successfully'}
                <button
                  type='button'
                  className='btn-close'
                  onClick={closeAlert}
                  aria-label='Close'
                ></button>
              </div>
            )}
            <div className='mb-2'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='form-control'
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='form-control'
                placeholder='Password'
              />
            </div>
            <div className='d-grid'>
              <button
                className='btn'
                onClick={submitHandler}
                style={{
                  width: '100%',
                  backgroundColor: 'navy',
                  color: 'white',
                }}
              >
                <Navigate to='' />
                Login
              </button>
            </div>
            <p className='text-center'>
              Don't have an account? <a href='/register'>Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
