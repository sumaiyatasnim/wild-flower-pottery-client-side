import React from 'react';
import { Link } from 'react-router-dom';
import './homeService.css';

const HomeService = ({ pd }) => {
    const { _id, name, price, description, image } = pd;
    return (
        <div>

            <div className="col">
                <div className="col rounded-3 gx-5">
                    <div style={{ height: "500px", }} className="card mb-3 card card-style">
                        <img style={{ height: "300px" }} className="card-img-top pd-img " src={image} alt="" />
                        <div className="card-body" >
                            <h6 className="text-success">{name}</h6>
                            <h6>Price: {price}</h6>
                            {/* <p className="px-3">{description}</p> */}
                        </div>
                        <div className="d-flex justify-content-center pb-4">
                            <Link to={`/orderPlace/${_id}`}>
                                <button className="btn btn-primary">See Details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeService;