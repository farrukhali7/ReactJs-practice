import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/buttons/card.jsx';

const Products = () => {
    const [loading, error, data] = useFetch('https://dummyjson.com/products');

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
                <h1 className="text-danger fw-bold fs-3">Error occurred</h1>
            </div>
        );
    }

    return (
        <div className="container my-5 d-flex flex-wrap justify-content-center gap-4">
            {data.products.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.thumbnail}
                />
            ))}
        </div>
    );
};

export default Products;
