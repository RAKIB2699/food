import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Loading from '../Loading';


const FoodDetails = () => {
    const { id } = useParams();
    const [food, setFood] = useState(null);
    const [notes, setNotes] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://foody-hub-server.vercel.app/foods/${id}`)
            .then(res => setFood(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleRequest = () => {
        const requestData = {
            ...food,
            status: "requested",
            requesterEmail: user.email,
            requestDate: new Date().toISOString(),
            notes,
        };
        axios.post('https://foody-hub-server.vercel.app/foods/myRequests', requestData)
        .then(res=>console.log(res.data))
    };

    if (!food) return <Loading></Loading>;

    return (
        <div className="max-w-2xl mx-auto p-4">
            <img src={food.image} alt={food.foodName} className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold mt-4">{food.foodName}</h2>
            <p><strong>Quantity:</strong> {food.quantity}</p>
            <p><strong>Pickup:</strong> {food.pickupLocation}</p>
            <p><strong>Donator:</strong> {food.donatorName} ({food.donatorEmail})</p>
            <p><strong>Expires:</strong> {new Date(food.expireDateTime).toLocaleString()}</p>
            <p><strong>Notes:</strong> {food.notes}</p>

            {/* Modal Trigger */}
            <button onClick={() => document.getElementById('requestModal').showModal()} className="btn btn-primary mt-4">Request</button>

            {/* Modal */}
            <dialog id="requestModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Request Food</h3>
                    <div className="space-y-2">
                        <input className="input input-bordered w-full" value={food.foodName} readOnly />
                        <input className="input input-bordered w-full" value={food.image} readOnly />
                        <input className="input input-bordered w-full" value={food._id} readOnly />
                        <input className="input input-bordered w-full" value={food?.email || ''} readOnly />
                        <input className="input input-bordered w-full" value={food.donatorName} readOnly />
                        <input className="input input-bordered w-full" value={user?.email || ''} readOnly />
                        <input className="input input-bordered w-full" value={new Date().toLocaleString()} readOnly />
                        <input className="input input-bordered w-full" value={food.pickupLocation} readOnly />
                        <input className="input input-bordered w-full" value={food.expireDateTime} readOnly />
                        <textarea className="textarea textarea-bordered w-full" onChange={(e) => setNotes(e.target.value)} placeholder="Additional notes..."></textarea>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn mr-2">Close</button>
                            <button className="btn btn-primary" onClick={handleRequest}>Request</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FoodDetails;