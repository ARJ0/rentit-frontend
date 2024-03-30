import React, { useState } from 'react';

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

const Header = () => {
  const flag = accountType();
  const userData = getlocalStorage("loggedUser");
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/")
    localStorage.clear();
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);

  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRequestSideBar, setRequestSideBar] = useState(false);
  const [isHistory, setIsHistory] = useState(false);

  const historySidebar = () => {
    setIsHistory(true);
  };

  const closeHistorySidebar = () => {
    setIsHistory(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openRequestSideBar = () => {
    setRequestSideBar(true);
  };

  const closeRequestSideBar = () => {
    setRequestSideBar(false);
  };



  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark brand-bg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {userData?._id && (
                <>
                  <li className="nav-item" style={{"margin-right": "30px"}}>
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                  </li>
                  <li className="nav-item" style={{"margin-right": "30px"}}>
                    <a className="nav-link" href="/explore">Explore</a>
                  </li>
                </>
              )}
              {flag.company && (
                <>
                <li className="nav-item" style={{"margin-right": "30px"}}>
                  <a className="nav-link" href="/your-equipment">Your Equipment</a>
                </li>
                 <li className="nav-item" style={{"margin-right": "30px"}}>
                 <a className="nav-link" href="/your-request">Your Request</a>
               </li>
               </>
              )}
            </ul>
          </div>
          {userData?._id && (
            <ul className="navbar-nav ml-auto">
              {flag.company && (
                <>
                  <li className="nav-item" style={{"margin-right": "15px"}}>
                    <button className="btn btn-outline-light" onClick={() => { openModal() }}>
                      Add Equipment {" "}<ControlPointIcon sx={{ fontSize: 20 }} />
                    </button>
                  </li>
                </>
              )}
              {flag.user && (
                <>
                <li className='nav-item' style={{"margin-right": "15px"}}>
                  <button className='btn text-white border-0' onClick={() => { openSidebar() }}>
                    <ShoppingBagIcon sx={{ fontSize: 30 }} />
                  </button>
                </li>
                 <li className="nav-item" style={{"margin-right": "15px"}}>
                 <button className="btn text-white border-0" onClick={() => { openRequestSideBar() }}>
                   <MessageIcon sx={{ fontSize: 30 }} />
                 </button>
               </li>
               <li className="nav-item" style={{"margin-right": "15px"}}>
                 <button className="btn text-white border-0" onClick={() => { historySidebar() }}>
                   <HistoryIcon sx={{ fontSize: 30 }} />
                 </button>
               </li>
               </>
              )}
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
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
