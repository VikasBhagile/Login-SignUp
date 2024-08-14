import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="form m-5 border border-primary">
          <h2 className="m-3 d-flex justify-content-center">Sign-up</h2>
          <hr className="border-warning m-1"></hr>

          <form>
            <div class="m-2 d-flex">
              <div className="m-3">
                <label for="fname" class="form-label">
                  FirstName
                </label>
                <input type="text" class="form-control" id="fname" />
              </div>

              <div className="m-3">
                <label for="lname" class="form-label">
                  LastName
                </label>
                <input type="text" class="form-control" id="lname" />
              </div>
            </div>

            <div class="m-2 d-flex">
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
            
            <div className="btn m-3  d-flex justify-content-center">
            <button type="submit" class="btn btn-outline-success">
              Submit
            </button>
             </div>
            
             <div className="m-3 d-flex justify-content-center">
              <p className="m-0">
                Already have an account? <Link to="/login">Login here</Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp