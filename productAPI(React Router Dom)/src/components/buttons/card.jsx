import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, image, id }) => {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: '22rem', cursor: 'pointer' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body" onClick={() => navigate(`/product/${id}`)}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={(e) => {
            e.stopPropagation(); // prevents parent click
            navigate(`/product/${id}`);
          }}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Card;
