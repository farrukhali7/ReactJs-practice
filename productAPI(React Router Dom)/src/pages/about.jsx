import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-80 text-center gap-3">
            <h1 className="fw-bold fs-1 mb-3">About Page</h1>
            <img src="https://icon-library.com/images/icon-for-about/icon-for-about-13.jpg" alt="" />
        </div>
    );
};

export default About;
