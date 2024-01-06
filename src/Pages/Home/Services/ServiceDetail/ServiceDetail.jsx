/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../../../assets/images/checkout/checkout.png'
import { Link, useLoaderData } from 'react-router-dom';
import logo1 from '../../../../assets/logo.svg'
const ServiceDetail = () => {
    const [service, setService] = useState([]);
    const services = useLoaderData();
    console.log(services.facility);
    const { _id, img, title, description, price } = services;


    return (

        <div>


            <div id="slide1" className="relative ">
                <img src={img1} className="w-full rounded-sm" style={{ height: '270px' }} />
                <div className="flex rounded-lg  items-center  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  left-0 top-0 bottom-0">
                    <div className="text-white space-y-7 pl-14  ">
                        <h2 className="text-3xl font-bold">Service Details</h2>


                    </div>
                    <div className="text-white " style={{
                        marginTop: '230px', marginLeft: '162px', borderRadius: '40px 40px 0px 0px', backgroundColor: 'red', padding: '8px 50px'
                    }} >
                        <p> < span > <Link to='/'>Home /</Link></span><span><Link to='/serviceDetail'> ServiceDetail</Link></span>  </p>
                    </div>
                </div >


            </div >


            <div className="flex mt-16">
                <div className="flex-auto w-96  ">
                    <div className=''>
                        <img className="rounded-xl" style={{ width: '100%', }} src={img} alt="" />
                        <h3 className='text-5xl font-bold py-6'>{title}</h3>
                        <p >{description}</p>
                    </div>
                </div>
                <div className="w-96 text-center px-10">
                    <div className=' bg-base-200 py-8 rounded-lg   text-center'>
                        <img className='inline-block align-middle' src={logo1} alt="Shoes" />
                        <h2 className='font-semibold mt-4'>Need Help? We Are Here
                            <br />  To Help You</h2>
                        <div className='bg-black w-48 mx-auto mt-7 p-4 rounded-lg'>
                            <p className='text-xl font-bold text-white'><span className='text-red-600'>Car Doctor</span> Special</p>
                            <p className=' font-bold text-white'>Save up to <span className='text-red-600'>60% off</span></p>

                        </div>
                    </div>
                    <div className='mt-11'>
                        <p className=' font-bold text-2xl mb-6'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}><button className="btn btn-block bg-red-500 text-white text-xl font-bold hover:bg-red-600">Service Booking</button></Link>
                    </div>
                </div>
            </div>

            <div className=" grid sm:justify-center gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                {
                    services.facility.map(service =>
                        <>
                            <div className='bg-base-200 p-6 rounded-xl' style={{ borderTop: '2px solid red' }}>
                                <p className='text-xl font-semibold '>{service.name}</p>
                                <p className='leading-snug mt-2'>{service.details}</p>
                            </div>
                        </>)
                }

            </div>



        </div >

    );
};

export default ServiceDetail;