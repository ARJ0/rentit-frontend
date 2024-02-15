import { Route, Routes, useLocation } from "react-router-dom";

import Home from './components/Home'
import Layout from './Layout'
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import './css/index.css'

function App() {
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <div className="App">
    
    <Routes key={location.pathname} location={location}>
      <Route exact path='/' element={<Layout />}> 
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
