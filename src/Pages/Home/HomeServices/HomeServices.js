import React, { useEffect, useState } from 'react';
import HomeService from './HomeService';

const HomeServices = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    useEffect(() => {
        fetch('https://limitless-reef-99253.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setHomeProducts(data));
    }, [])
    const homePd = homeProducts.slice(0, 6);
    return (
        <div className="container">
            <h2 className='d-flex justify-content-center my-5'>Featured Products</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    homePd.map(pd => <HomeService
                        key={pd.id}
                        pd={pd}
                    >
                    </HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;