import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FeaturedFood = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/foods/featured')
            .then(response => setFoods(response.data))
            .catch(error => {
                console.error('Error fetching featured foods:', error);
            });
    }, []);
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-green-600">Featured Foods</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {foods.map(food => (
                    <div key={food._id} className="bg-white p-4 shadow-md rounded-lg">
                        <img src={food.image} alt={food.foodName} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-3">{food.foodName}</h3>
                        <p className="text-sm text-gray-500 mt-1">{food.description?.slice(0, 60)}...</p>
                        <p className="mt-2 text-sm"><span className="font-medium">Quantity:</span> {food.quantity}</p>
                        <p className="text-sm"><span className="font-medium">Pickup:</span> {food.pickupLocation}</p>
                        <p className="text-sm"><span className="font-medium">Expires:</span> {food.expireDateTime?.split('T')[0]}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link to="/availablefood">
                    <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFood;