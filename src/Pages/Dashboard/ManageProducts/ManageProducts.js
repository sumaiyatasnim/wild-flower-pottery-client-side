import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [cancel, setCancel] = useState("");
    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Delete a Food Item 
    const handleDelete = (id) => {
        const confirm = window.confirm(
            "Are You Sure you are going to delete product?"
        );
        if (confirm) {
            axios
                .delete(`http://localhost:5000/allProducts/delete/${id}`)
                .then((res) => {
                    if (res.data.deletedCount) {
                        alert('Product has been deleted')
                        window.location.reload();
                    }
                });
        }
    };
    return (
        <div className="my-5">
            <div className="container">

                <h3>All Items Available Now</h3>
                <div className="py-5">
                    <div className="row g-5">
                        {products.map((product) => (
                            <div className="col-md-3">
                                <Card className="card-bg">
                                    <Card.Img
                                        variant="top"
                                        src={product.image}
                                        height="200px"
                                    />
                                    <Card.Body style={{ height: '240px' }}>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Title className="banner-text">
                                            ${product.Price}
                                        </Card.Title>
                                        <div className='pb-5'>
                                            <button
                                                className="card-btn btn btn-danger "
                                                onClick={() => handleDelete(product._id)}
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;