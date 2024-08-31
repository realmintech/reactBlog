import React from 'react';
import { useState } from 'react';
import { HttpStatusCode } from 'axios';

export default function Toast() {
  const [toast, setToast] = useState(false);
  return (
    <>
      {toast && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {HttpStatusCode === 200 && 'Blog post deleted successfully'
            ? 'Not allowed'
            : 'Blog post deleted successfully'}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setToast(false)}
          ></button>
        </div>
      )}
    </>
  );
}
