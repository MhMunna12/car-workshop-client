/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../Auth/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, price, title, service_id, img } = service;
    console.log(service);
    const handleServiceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email
        const message = form.message.value;
        form.reset()
        // const price = form.price.value;

        const booking = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price,
            message: message

        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Service book successfully')
                }

            })

    }
    return (
        <form onSubmit={handleServiceOrder} className="card-body  w-full bg-base-200 mt-10 mb-16 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="form-control">

                    <input defaultValue={user?.displayName} name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <input name='date' type="date" placeholder="Service Date" className="input input-bordered" required />

                </div>
                <div className="form-control">

                    <input name='email' defaultValue={user?.email} type="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <input name='price' type="text" defaultValue={'$ ' + price} className="input input-bordered" required />

                </div>

            </div>
            <textarea name='message' className="textarea textarea-bordered" placeholder="Your Message"></textarea>
            <div className="form-control mt-6">

                <input className='btn bg-red-500 hover:bg-red-700 text-white font-bold btn-block' type="submit" value='Order Confirm' />
            </div>
        </form>
    );
};

export default CheckOut;