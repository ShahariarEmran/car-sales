import React from 'react';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
// import MoreCars from '../MoreCars/MoreCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;