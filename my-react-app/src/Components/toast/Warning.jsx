import React from 'react';

export default function Warning() {
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Dear Blogger</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Opps... there was an error in your input</div>
        </div>
      </div>
    </>
  );
}
