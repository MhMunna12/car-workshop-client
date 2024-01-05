/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import AreaService from '../AreaService/AreaService';
import PopularProduct from '../PopularProduct/PopularProduct';
import Engineer from '../Engineer/Engineer';
import CoreFeatures from '../../CoreFeatures/CoreFeatures';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About />
            <Services />
            <AreaService />
            <PopularProduct />
            <Engineer></Engineer>
            <CoreFeatures />
        </div>
    );
};

export default Home;