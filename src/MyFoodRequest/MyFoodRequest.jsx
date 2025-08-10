import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading';

const NoRequests = () => (
  <div className="flex flex-col items-center justify-center mt-20 space-y-6 text-gray-500 animate-fadeIn">
    {/* Animated bouncing plate with food icon */}
    <svg
      className="w-28 h-28 text-green-500 animate-bounce"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 13c0-1.105.672-2 1.5-2S11 11.895 11 13s-.672 2-1.5 2S8 14.105 8 13z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 17c-1.105 0-2 .672-2 1.5S10.895 20 12 20s2-.672 2-1.5S13.105 17 12 17z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4a8 8 0 108 8 8 8 0 00-8-8z"
      />
    </svg>
    <p className="text-xl font-semibold">You have not made any food requests yet.</p>
    <p className="max-w-md text-center text-gray-400">
      Start exploring available foods and make your first request today!
    </p>
  </div>
);

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: requests = [], isLoading } = useQuery({
    queryKey: ['requested-food'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/foods/myRequests/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="w-11/12 max-w-[1600px] mx-auto my-12">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">My Food Requests</h2>

      {requests.length === 0 ? (
        <NoRequests />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {requests.map(req => (
            <div
              key={req._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={req.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                alt={req.foodName}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">{req.foodName}</h3>
                <p className="text-gray-600 mb-1"><span className="font-medium">Donor:</span> {req.donorName}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Pickup:</span> {req.pickupLocation}</p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Expires:</span> {new Date(req.expireDateTime).toLocaleDateString()}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Requested on:</span> {new Date(req.requestDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
