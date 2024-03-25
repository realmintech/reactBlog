import React from "react";

export default function Success() {
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
          <div class="toast-header">
            <strong class="me-auto">Dear Blooger</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">You have successfully loggedIn</div>
        </div>
      </div>
    </>
  );
}
