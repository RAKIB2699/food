import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const MyFoodRequest = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/foods/myRequests/${user?.email}`
                );
                setRequests(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRequests();
    }, [user]);
    

    
    return (
        <div className="w-11/12 max-w-6xl mx-auto my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">My Food Requests</h2>

            {requests.length === 0 ? (
                <p className="text-center text-gray-500">You have not made any food requests yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2">Food Name</th>
                                <th className="border px-4 py-2">Donor Name</th>
                                <th className="border px-4 py-2">Pickup Location</th>
                                <th className="border px-4 py-2">Expire Date</th>
                                <th className="border px-4 py-2">Request Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((req) => (
                                <tr key={req._id} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">{req.foodName}</td>
                                    <td className="border px-4 py-2">{req.donorName}</td>
                                    <td className="border px-4 py-2">{req.pickupLocation}</td>
                                    <td className="border px-4 py-2">{req.expireDate}</td>
                                    <td className="border px-4 py-2">{req.requestDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyFoodRequest;