import React from 'react';
import potteryVideo from '../../../Pottery/pottery-video.mp4'
const HomeVideo = () => {
    return (
        <div className='container'>
            <hr className='d-flex justify-content-center ' />
            <div className="container-fluid video-sec my-5 mt-5">
                <div className="row row-cols-2">
                    <div className="col">
                        <video className="dance w-100" controls>
                            <source src={potteryVideo} type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="col p">
                        <h3>Handy Crafted Pottery </h3>
                        <h3>Since 1995</h3>
                        <p className="pb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero veniam eveniet fugit, mollitia nesciunt officia beatae sapiente ea placeat aut corrupti consequuntur fugiat velit! Sapiente nihil reiciendis sed ut? Obcaecati et nostrum cumque veniam repellat rerum doloribus neque perferendis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;