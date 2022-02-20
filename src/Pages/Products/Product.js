import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, image } = product;
    return (
        <div className="container">
            <div className="col rounded-3 h-100 gy-3 container">
                <div className="card  mb-3 card card-style">
                    <img style={{ height: "250px" }} className="img-fluid card-img-top  " src={image} alt="" />
                    <div style={{ height: '340px' }} className=" card-body">
                        <h6 className="text-success">{name}</h6>
                        <p>Description : {description}</p>
                        <h5>Price: ${price}</h5>
                        {/* <p className="px-3">{description}</p> */}
                    </div>
                    <div className="d-flex justify-content-center pb-4">
                        <Link to={`/orderPlace/${_id}`}>
                            <button className="btn btn-dark">Buy Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;