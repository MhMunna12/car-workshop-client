/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import AreaService from '../AreaService/AreaService';
import PopularProduct from '../PopularProduct/PopularProduct';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About />
            <Services />
            <AreaService />
            <PopularProduct />
        </div>
    );
};

export default Home;