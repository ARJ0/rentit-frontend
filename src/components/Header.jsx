import React, { useState, useEffect } from 'react';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import AddToCart from '../pages/AddToCart';
import { accountType, getlocalStorage } from '../services/helper';
import UploadEquipment from './UploadEquipment';
import RequestSideBar from '../pages/RequestSideBar';
import History from '../pages/History';
import '../css/_header.css'

const Header = () => {
  const flag = accountType();
  const userData = getlocalStorage("loggedUser");
  const navigate = useNavigate();
  const handleLogout = () => {
    if (userData?._id) {
      navigate("/")
    } else {
      navigate("/login")
    }
    localStorage.clear();
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
    toggleNav()

  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRequestSideBar, setRequestSideBar] = useState(false);
  const [isHistory, setIsHistory] = useState(false);

  const historySidebar = (istoggleNav = false) => {
    setIsHistory(true);
    istoggleNav && toggleNav()
  };

  const closeHistorySidebar = () => {
    setIsHistory(false);
  };

  const openSidebar = (istoggleNav) => {
    setIsSidebarOpen(true);
    istoggleNav && toggleNav()
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openRequestSideBar = (istoggleNav) => {
    setRequestSideBar(true);
    istoggleNav && toggleNav()
  };

  const closeRequestSideBar = () => {
    setRequestSideBar(false);
  };
  const toggleNav = () => {
    const navbar = document.querySelector(".menubar");
    const mobileNav = document.querySelector(".hamburger");
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };

  useEffect(() => {
    const mobileNav = document.querySelector(".hamburger");
    mobileNav.addEventListener("click", () => toggleNav());
  }, [])
  


  return (
    <>
     <nav className="brand-bg">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="align-items-center text-white">
          {userData?._id && (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/explore">Explore</a>
              </li>
            </>
          )}
          {flag.company && userData?._id && (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/your-equipment">Your Equipment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/your-request">Your Request</a>
              </li>
            </>
          )}
          {flag.company && (
            <li className="nav-item">
              <button className="btn btn-outline-light" aria-label="Open Control Point Icon" onClick={() => { setIsOpen(true) }}>
                Add Equipment <ControlPointIcon sx={{ fontSize: 20 }} />
              </button>
            </li>
          )}
          {flag.user && userData?._id && (
            <>
              <li className='nav-item'>
                <button className='btn text-white border-0' aria-label="Open Shopping Bag" onClick={() => { openSidebar() }}>
                  <ShoppingBagIcon sx={{ fontSize: 30 }} />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn text-white border-0" aria-label="Open Message Icon" onClick={() => { openRequestSideBar() }}>
                  <MessageIcon sx={{ fontSize: 30 }} />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn text-white border-0" aria-label="Open History Icon" onClick={() => { historySidebar() }}>
                  <HistoryIcon sx={{ fontSize: 30 }} />
                </button>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={handleLogout}>{userData?._id ? "Logout" : "Login"}</button>
          </li>
        </ul>
        <div className="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div className="menubar brand-bg">
        <ul className="align-items-center text-center">
          {userData?._id && (
            <>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/explore">Explore</a>
              </li>
            </>
          )}
          {flag.company && userData?._id && (
            <>
              <li className="nav-item">
                <a className="nav-link text-white" href="/your-equipment">Your Equipment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/your-request">Your Request</a>
              </li>
            </>
          )}
          {flag.company && (
            <li className="nav-item">
              <button className="btn btn-outline-light" onClick={() => { setIsOpen(true) }}>
                Add Equipment <ControlPointIcon className='text-white' sx={{ fontSize: 20 }} />
              </button>
            </li>
          )}
          {flag.user && userData?._id && (
            <>
              <li className='nav-item'>
                <button className='btn border-0 text-white' style={{"font-size": "18px"}} value='bag icon' onClick={() => { openSidebar(true) }}>
                Bag  <ShoppingBagIcon className='text-white' sx={{ fontSize: 30 }} />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn border-0 text-white" style={{"font-size": "18px"}} onClick={() => { openRequestSideBar(true) }}>
                Message <MessageIcon className='text-white' sx={{ fontSize: 30 }} />
                </button>
              </li>
              <li className="nav-item">
                <button className="btn border-0 text-white" style={{"font-size": "18px"}} onClick={() => { historySidebar(true) }}>
                History <HistoryIcon className='text-white' sx={{ fontSize: 30 }} />
                </button>
              </li>
               <li className="nav-item">
                <a href="/AboutUs" className="nav-link text-white">About Us</a>
              </li>
               <li className="nav-item">
                <a href="/FAQ" className="nav-link text-white">FAQs</a>
              </li>
               <li className="nav-item">
                <a href="/Careers" className="nav-link text-white">Careers</a>
              </li>
               <li className="nav-item">
                <a href="/ContactUs" className="nav-link text-white">Contact</a>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="btn btn-outline-light text-white" onClick={handleLogout}>{userData?._id ? "Logout" : "Login"}</button>
          </li>
        </ul>
      </div>
      {isSidebarOpen && (
          <AddToCart closeSidebar={closeSidebar}/>
      )}
      {isRequestSideBar && (
        <RequestSideBar closeSidebar={closeRequestSideBar}/>
      )}
      {isHistory &&  (
        <History  closeSidebar={closeHistorySidebar}/>
      )}
      {isOpen && <UploadEquipment closeModal={closeModal}/>}
    </>
  )
}

export default Header;
