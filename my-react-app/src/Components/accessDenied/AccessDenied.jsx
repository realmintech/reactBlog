import React from 'react';
import '../accessDenied/AccessDenied.css'
import { Link } from 'react-scroll';

const AccessDenied = () => {
  return (
    <div className="text-center mt-5">
      <h1>Acess denied.</h1>
      <Link to="/about" className="goToHome cursor-pointer text-blue">
        Go back to Home
      </Link>
    </div>
  );
};

export default AccessDenied;
