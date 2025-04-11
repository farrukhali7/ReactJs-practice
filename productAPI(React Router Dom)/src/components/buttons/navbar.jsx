import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow fw-bolder">
            <div className="container">
                {/* Logo/Brand */}
                <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                    <i className="bi bi-box-seam fs-4"></i>
                    <h2 className='lh-sm fw-bold'>Product App</h2>
                </Link>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" end>
                               <h5>Home</h5> 
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                                <h5>About</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">
                                <h5>Products</h5>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                <h5>Contact</h5>
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
