import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className='bg-light text-dark pt-5 pb-4'>
            <div className="container text-center text-md-left">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 text-center text-md-left">
                    <div className="col">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-info'>Wild Flower Pottery </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptas autem aspernatur tenetur. Consequatur earum amet tenetur deleniti asperiores accusamus culpa sed, nulla fugiat itaque sunt dolores, voluptas quia praesentium.</p>
                    </div>
                    <div className="col mx-auto mt-3 mx-auto">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-info'> Get Help </h5>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'>Your Account</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'>FAQ</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'>Shipping</Link>
                        </p>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'>Returns</Link>
                        </p>

                    </div>
                    <div className="col mx-auto mt-3 mx-auto">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-info'> Follow Us </h5>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'><i className='fab fa-facebook-f'></i></Link>
                        </p>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'><i className="fab fa-twitter"></i></Link>
                        </p>
                        <p>
                            <Link to='/' className='text-dark text-decoration-none'><i className="fab fa-instagram"></i></Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;