import React from 'react'
import logo from '../logo.svg'

const Footer = () => {
  return (
    
    <footer className="text-center text-lg-start bg-body-tertiary text-light">
      
      <section className="brand-bg">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
              
              <h6 className="text-uppercase fw-bold mb-4">
              <img src={logo} alt="My SVG" fill="" />
              </h6>
              <p>
                UNLEASH THE POWER OF SMART RENTALS
              </p>
            </div>
            
    
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              
              <h6 className="text-uppercase fw-bold mb-4">
              Company
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">About Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Investors</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Careers</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Contact</a>
              </p>
            </div>
            
    
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              
              <h6 className="text-uppercase fw-bold mb-4">
              Services
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Find Used Equipments</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">View Deals</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Service 3</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Service 4</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
              
              <h6 className="text-uppercase fw-bold mb-4">
              Resources
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">News</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Blog</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Videos</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">FAQs</a>
              </p>
            </div>
          
            
          </div>
          
        </div>
      </section>
      
    
      
      <div className="text-center p-4 text-dark" style={{"background-color": "rgba(0, 0, 0, 0.05)"}}>
        © 2024 Rentit. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
