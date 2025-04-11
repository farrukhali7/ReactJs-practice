import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5 mt-5 border-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="mb-2"
            >
              <path d="M22.672 15.226..."></path>
            </svg>
            <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
          </div>
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Branding</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Design</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Marketing</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Advertisement</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">About us</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Contact</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Jobs</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Press kit</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Terms of use</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Privacy policy</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Cookie policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
