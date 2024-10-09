import React from 'react';
import '../accessDenied/AccessDenied.css'

const AccessDenied = () => {
  return (
    <div className="text-center mt-5">
      <h1> Error 404.</h1>
      <a  href="/" className="goToHome cursor-pointer text-blue">
        Go back to Home
      </a>
    </div>
  );
};

export default AccessDenied;
