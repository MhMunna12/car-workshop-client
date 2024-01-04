/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { useEffect } from 'react';
import BookingRow from '../BookingRow/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setBookings(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete successful')
                        const remanining = bookings.filter(booking => booking._id !== id)
                        setBookings(remanining)
                    }
                })
        }
    }

    const handleConfirm = id => {
        const proceed = confirm('Are You sure you want change Service Status');
        if (proceed) {
            const url = `http://localhost:5000/booking/${id}`
            fetch(url, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert('update');
                        const remain = bookings.filter(book => book._id !== id);
                        const updated = bookings.find(book => book._id === id);
                        updated.status = 'confirm';
                        const newBooking = [updated, ...remain]
                        setBookings(newBooking)
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table mt-12 mb-20">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Image</th>
                        <th>Service Name</th>
                        <th>Service Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                </tbody>
                {
                    bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}

                    ></BookingRow>)
                }
            </table>
        </div>
    );
};

export default Bookings;