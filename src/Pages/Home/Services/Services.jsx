/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [search])
    const handleFilter = () => {
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center p-5 mt-12'>

                <h3 className='text-orange-600 font-bold'>Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which dont look even slightly believable. .</p>
                <div className="join mb-5">
                    <div>
                        <div>
                            <input ref={searchRef} className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">filterd</span>
                        <button onClick={handleFilter} className="btn join-item">Search</button>
                    </div>
                </div>
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