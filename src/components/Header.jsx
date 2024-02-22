import React from 'react'
import logo from '../logo.svg';
import { accountType, getlocalStorage, setlocalStorage } from '../services/helper';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const flag = accountType();
  const userData = getlocalStorage("loggedUser");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/")
    localStorage.clear();
  }
  return (
    <nav className="navbar navbar-expand-md navbar-dark brand-bg">
      <div className="container-fluid">
        <a className="navbar-brand d-md-none" href="#">
          <img src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {userData?._id && <><li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="/explore">Explore</a>
              </li></>}
            <a className="navbar-brand d-none d-md-block" href="#">
              <img src={logo} alt="" />
            </a>
            {flag.user && <li className="nav-item">
              <a className="nav-link" href="#">Add to Card</a>
            </li>}
            {flag.company &&
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/your-equipment">Your Equipment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/add-equipment"><ControlPointIcon sx={{ fontSize: 30 }} /></a>
                </li>
              </>
            }
          </ul>
          {userData?._id && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="btn btn btn-outline-warning" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
