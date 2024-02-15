import React, { useState } from 'react'
import login_icon from '../imges/login_icon.svg'
import { loginUser } from '../services/actionCreator';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [password, setPassword] = useState();
  const [eamil, setEamil] = useState();
  const navigate = useNavigate();

  const login = () => {
    debugger
    if (!eamil || !password) {
      return alert("Please Fill all the Fields");
    }
    const reqBody = {
      eamil: eamil, password: password
    }
    loginUser(reqBody).then((data) => {
      if (data.success) {
        navigate('/home')
      }
    })
      .catch((err) => {
        console.log("error -=-=-= ", err)
      })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 w-100">
          <div className="card my-5 d-flex text-left">
            <div className="row">
              <div className='col-md-6 '>
                <h2 className="text-dark mt-5 text-center">Sign In</h2>
                <div className=" mb-5 font-weight-bold brand-color-text text-uppercase text-center">
                  New user? {" "}
                  <a className="text-decoration-none" href="/registration">
                    Create an account
                  </a>
                </div>
                <form className="card-body cardbody-color p-lg-5">

                  <div className="mb-3">
                    <input
                      type="eamil"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={eamil}
                      required
                      onChange={(e) => setEamil(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center "><button type="button" className="btn brand-bg text-white px-5 mt-5 w-50" onClick={() => login()} >Login</button></div>
                </form>
              </div>
              <div className='col-md-6 d-flex'>
                <img src={login_icon} alt="My SVG" fill="red" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
