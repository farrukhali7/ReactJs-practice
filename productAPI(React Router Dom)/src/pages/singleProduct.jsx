import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const SingleProduct = () => {
    const { id } = useParams();
    const [loading, error, data] = useFetch(`https://dummyjson.com/products/${id}`);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-80">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-80">
                <h1 className="text-danger">Error occurred</h1>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-md-6 text-center">
                    <img
                        src={data.thumbnail}
                        alt={data.title}
                        className="img-fluid rounded border shadow"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">{data.title}</h2>
                    <div className="d-flex align-items-center gap-3">
                        <span className="fs-4 text-success">${data.price}</span>
                        <span className="text-muted text-decoration-line-through">
                            ${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)}
                        </span>
                        <span className="text-success small">-{data.discountPercentage}% Off</span>
                    </div>
                    <p className="text-warning mt-2">
                        ⭐⭐⭐⭐⭐ <span className="text-secondary">({data.rating} Rating)</span>
                    </p>
                    <p className="text-muted">{data.description}</p>

                    <ul className="list-unstyled">
                        <li><strong>Availability:</strong> {data.availabilityStatus || 'In Stock'} ({data.stock} left)</li>
                        <li><strong>Minimum Order Quantity:</strong> 24</li>
                        <li><strong>Shipping:</strong> Ships in 1 month</li>
                        <li><strong>Warranty:</strong> {data.warrantyInformation || '1 year'}</li>
                        <li><strong>Return Policy:</strong> {data.returnPolicy || '30 days return'}</li>
                        <li><strong>Barcode:</strong> {data.sku}</li>
                    </ul>

                    <img
                        src="https://assets.dummyjson.com/public/qr-code.png"
                        alt="QR Code"
                        className="img-thumbnail mb-3"
                        style={{ width: '80px', height: '80px' }}
                    />

                    <button className="btn btn-primary w-100">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
