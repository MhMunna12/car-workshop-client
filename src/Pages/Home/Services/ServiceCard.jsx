/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className="rounded-xl" style={{ height: '208px' }} src={img} />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions text-orange-500 flex justify-between items-center">
                    <h6 >Price: ${price}</h6>
                    <h6 ><FaArrowRight /></h6>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;