import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, {  } from 'react';
import { useNavigate } from 'react-router';

const AvailableFood = () => {
    const navigate = useNavigate();
    const {data:foods, isLoading}=useQuery({
        queryKey: ['foods'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:3000/foods')
            return res.data
        }
    })

    if (isLoading) {
        return <p className="text-center my-10 text-xl font-medium">Loading available foods...</p>;
    }

    if (foods.length === 0) {
        return <p className="text-center my-10 text-xl font-medium">No available foods found.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">Available Foods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map(food => (
                    <div key={food._id} className="card bg-white shadow-md p-4 rounded-lg">
                        <img src={food.image} alt={food.foodName} className="w-full h-40 object-cover rounded" />
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">{food.foodName}</h3>
                            <p><span className="font-medium">Quantity:</span> {food.quantity}</p>
                            <p><span className="font-medium">Location:</span> {food.pickupLocation}</p>
                            <p><span className="font-medium">Expires:</span> {new Date(food.expireDateTime).toLocaleString()}</p>
                            <p className="text-sm mt-1 text-gray-600">{food.notes}</p>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => navigate(`/foods/${food._id}`)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableFood;