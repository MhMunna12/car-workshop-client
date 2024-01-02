/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center p-5'>

                <h3 className='text-orange-600 font-bold'>Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. .</p>
                <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Services;