import React from 'react';

export default function Warning() {
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        class="d-flex justify-content-center align-items-center w-100"
      >
        <div
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">Dear Blogger</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Opps... there was an error in your input</div>
        </div>
      </div>
    </>
  );
}