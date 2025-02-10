import React, { useState } from "react";

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      { (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="">
                    <label htmlFor="">Username</label>
                    <input type="text" name="username"/>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"></input>
                </form>
              </div>
              <div className="modal-footer">
               
                <button type="button" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;