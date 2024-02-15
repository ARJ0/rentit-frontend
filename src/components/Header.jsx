import React from 'react'
import logo  from '../logo.svg';

const Header = () => {
  return (
    <nav class="navbar navbar-light brand-bg justify-content-center">
      <div className='d-flex'>
      <a class="navbar-brand" href="#">
        <img src={logo} alt="My SVG" fill="" />;
      </a>
      </div>
    </nav>
  )
}

export default Header
