import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Loading from '../Loading';

// You can replace this with any suitable eye-catching SVG or image URL you prefer
const NoDataGraphic = () => (
  <div className="flex flex-col items-center justify-center text-center text-gray-400 mt-20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-40 mb-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </svg>
    <p className="text-xl font-semibold">No available foods found.</p>
  </div>
);

const AvailableFood = () => {
  const navigate = useNavigate();
  const [isTwoCols, setIsTwoCols] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ['foods'],
    queryFn: async () => {
      const res = await axios.get('https://foody-hub-server.vercel.app/foods');
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // Filtered and sorted foods
  const filteredFoods = foods
    .filter(food =>
      food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort(
      (a, b) =>
        new Date(a.expireDateTime).getTime() - new Date(b.expireDateTime).getTime()
    );

  if (filteredFoods.length === 0) {
    return <NoDataGraphic />;
  }

  return (
    <div className="max-w-[1600px] w-11/12 mx-auto mt-12 flex flex-col lg:flex-row gap-10">
      {/* Left sidebar: Search & toggle */}
      <aside className="lg:w-1/4 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Available Foods</h2>
        <input
          type="text"
          placeholder="Search by food name..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setIsTwoCols(prev => !prev)}
          className="btn btn-outline mt-2 w-full"
        >
          {isTwoCols ? 'Switch to 3 Columns' : 'Switch to 2 Columns'}
        </button>
      </aside>

      {/* Right main content: Food cards */}
      <main className={`lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 ${isTwoCols ? '' : 'lg:grid-cols-3'} gap-6`}>
        {filteredFoods.map(food => (
          <div
            key={food._id}
            className="card bg-white shadow-md rounded-lg flex flex-col overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.foodName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{food.foodName}</h3>
              <p><span className="font-medium">Quantity:</span> {food.quantity}</p>
              <p><span className="font-medium">Location:</span> {food.pickupLocation}</p>
              <p><span className="font-medium">Expires:</span> {new Date(food.expireDateTime).toLocaleString()}</p>
              {food.notes && (
                <p className="text-sm mt-1 text-gray-600 flex-grow">{food.notes}</p>
              )}
              <button
                className="btn btn-primary mt-4 self-start"
                onClick={() => navigate(`/foods/${food._id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AvailableFood;
