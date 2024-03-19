import { Route, Routes, useLocation } from "react-router-dom";

import Home from './components/Home'
import Layout from './Layout'
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import Explore from "./pages/Explore";
import './css/index.css'
import './css/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { YourEquipment } from "./pages/YourEquipment";
import Request from "./components/Request";

function App() {
  const location = useLocation();

  return (
    <div className="App">
    <ToastContainer />
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<Layout />}> 
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/your-equipment" element={<YourEquipment/>} />
        <Route path="/your-request" element={<Request/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
