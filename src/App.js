import { Route, Routes, useLocation } from "react-router-dom";

import Home from './components/Home'
import Layout from './Layout'
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import Explore from "./pages/Explore";
import './css/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AddEquipment from "./pages/AddEquipment";
import { YourEquipment } from "./pages/YourEquipment";

function App() {
  const location = useLocation();

  return (
    <div className="App">
    <ToastContainer />
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<Layout />}> 
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/add-equipment" element={<AddEquipment/>} />
        <Route path="/your-equipment" element={<YourEquipment/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
