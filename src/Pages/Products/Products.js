import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation'
import Product from './Product';
const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <h2 className=" my-4 text-center ">All items available</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                {
                    allProducts.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                        ></Product>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;