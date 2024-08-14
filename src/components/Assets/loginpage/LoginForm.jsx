import React from "react";
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="form m-5 col-5 border border-primary rounded  rounded-pill">
          <h2 className="m-3 d-flex justify-content-center">Login</h2>
          <hr className="border-warning m-1"></hr>

          <form>
            <div class="m-3 col-12">
              <div className="m-3">
                <label for="Email1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="Email1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="m-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            
            <div className="btn m-2 d-flex justify-content-center">
            <button type="submit" class="btn btn-outline-success col-5">
              login
            </button>
             </div>
            
             <div className="m-2 d-flex justify-content-center">
              <p className="m-0">
                New Here <a href="/">Create an account?</a>
              </p>


            </div><div className="m-2 d-flex justify-content-center">
              <p className="m-0">
              <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>



          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
