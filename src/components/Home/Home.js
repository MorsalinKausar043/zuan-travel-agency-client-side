import React from 'react';
import Carousel from '../../pages/carousel/Carousel';
import MiddleBanner from '../../pages/MiddleBanner/MiddleBanner';
import Navbar from '../../pages/navbar/Navbar';
import Product from '../../pages/products/Product';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Carousel />
            <Product />
            <MiddleBanner/>
            <Footer/>
        </>
    );
};

export default Home;