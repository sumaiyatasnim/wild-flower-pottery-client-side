import React from 'react';
import './banner.css';

const Banner = () => {

    return (
        <div className='container-fluid'>
            <div className="banner d-flex  align-items-center ">
                <div className="row container">
                    <div className="col-md-10 col-lg-10 col-12">
                        <h1 className="title ">Pottery Collection</h1>
                        <h2 className="title-two">Unique and modern pottery for you &#10084;&#65039;  </h2>
                        <div className='d-flex justify-content-center'><button className='btn btn-light my-3 text-center'>Explore more</button></div>

                    </div>
                    <div className="col-md-2 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;