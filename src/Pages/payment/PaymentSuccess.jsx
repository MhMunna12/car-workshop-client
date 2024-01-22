import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
    const location = useLocation();
    console.log(location.search);
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId")
    console.log(transactionId);
    const [booking, setBooking] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/booking/by-transaction-id/${transactionId}`)
            .then(response => response.json())
            .then(data => {
                setBooking(data)
            })
    }, [transactionId])
    console.log(booking);
    console.log(booking.paid);
    const { customerName, price, service, message } = booking;
    return (
        <div className="bg-base-200 px-10 py-5">
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>service</th>
                            <th>location</th>

                            <th>TransactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{customerName}</td>
                            <td>{price}</td>
                            <td>{service}</td>
                            <td>{message}</td>

                            <td>{transactionId}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center mt-5">
                    <button onClick={() => window.print()} className="btn btn-success px-10 text-white font-bold">print</button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;