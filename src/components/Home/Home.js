import React from 'react';
import Carousel from '../../pages/carousel/Carousel';
import MiddleBanner from '../../pages/MiddleBanner/MiddleBanner';
import MiddlePage from '../../pages/middlePage/MiddlePage';
import Navbar from '../../pages/navbar/Navbar';
import Product from '../../pages/products/Product';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Carousel />
            <Product />
            <MiddlePage/>
            <MiddleBanner />
        </>
    );
};

export default Home;