
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HomeServices from '../HomeServices/HomeServices';
import HomeVideo from '../HomeVideo/HomeVideo';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <div >
                <Banner></Banner>
                <Category></Category>
                <HomeVideo></HomeVideo>
                <HomeServices></HomeServices>
            </div>


        </>
    );
};

export default Home;