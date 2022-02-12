import React from 'react';
import potteryPlanter from '../../../Pottery/pottery-planter-1.jpg';
import potteryTool from '../../../Pottery/pottery-tool-1.jpg';
import potteryPlate from '../../../Pottery/plate-1.jpg';
import potteryMug from '../../../Pottery/mug-1.jpg';
import potteryVase from '../../../Pottery/vase-1.jpg'

const Category = () => {


    return (
        <div className='container my-5'>
            <h2 className='text-center mb-4 fs-2'>Category </h2>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={potteryPlanter} class="card-img-top" alt="..."></img>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={potteryPlate} class="card-img-top" alt="..."></img>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={potteryVase} class="card-img-top" alt="..."></img>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={potteryTool} class="card-img-top" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;