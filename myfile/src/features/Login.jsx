import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
         Login
      </button>
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to Close Modal */}
      {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
    </>
  );
}

export default Login;
