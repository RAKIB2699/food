import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const [updateFood, setUpdateFood] = useState(null);
    const axiosSecure = useAxiosSecure();
   
    const { data: foods, isLoading, refetch } = useQuery({
        queryKey: ["myFoods"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myFoods?email=${user.email}`);
            return res.data;
        }
    });

    if (isLoading) return "Loading...";

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this food item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/foods/${id}`)
                    .then(() => {
                        refetch();
                        Swal.fire('Deleted!', 'Your food has been deleted.', 'success');
                    });
            }
        });
    };

    return (
        <div className="w-full px-4 py-6 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">Manage Your Foods</h2>

            {foods?.length === 0 ? (
                <p className="text-center text-gray-500">No food found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm md:text-base border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">Image</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Quantity</th>
                                <th className="p-2 border">Expire Date</th>
                                <th className="p-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods?.map(food => (
                                <tr key={food._id} className="border-t hover:bg-gray-50">
                                    <td className="p-2 border text-center">
                                        <img src={food.image} alt={food.foodName} className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded object-cover" />
                                    </td>
                                    <td className="p-2 border">{food.foodName}</td>
                                    <td className="p-2 border">{food.quantity}</td>
                                    <td className="p-2 border">{food.expireDateTime?.split('T')[0]}</td>
                                    <td className="p-2 border space-y-1">
                                        <button
                                            className="w-full md:w-auto px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs md:text-sm"
                                            onClick={() => setUpdateFood(food)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="w-full md:w-auto px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-xs md:text-sm mt-1"
                                            onClick={() => handleDelete(food._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {updateFood && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
                    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg md:text-xl font-semibold mb-4">Update Food</h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target;
                                const updated = {
                                    foodName: form.foodName.value,
                                    quantity: form.quantity.value,
                                    pickupLocation: form.pickupLocation.value,
                                    description: form.description.value,
                                    expireDateTime: form.expireDateTime.value,
                                };
                                axiosSecure.patch(`/foods/update/${updateFood._id}`, updated)
                                    .then(() => {
                                        Swal.fire('Updated!', '', 'success');
                                        setUpdateFood(null);
                                        refetch();
                                    });
                            }}
                        >
                            <div className="mb-3">
                                <label className="label font-medium">Food Name</label>
                                <input
                                    type="text"
                                    name="foodName"
                                    defaultValue={updateFood.foodName}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label font-medium">Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    defaultValue={updateFood.quantity}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label font-medium">Pickup Location</label>
                                <input
                                    type="text"
                                    name="pickupLocation"
                                    defaultValue={updateFood.pickupLocation}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label font-medium">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={updateFood.description}
                                    className="textarea textarea-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="label font-medium">Expire Date</label>
                                <input
                                    type="date"
                                    name="expireDateTime"
                                    defaultValue={updateFood.expireDateTime?.split('T')[0]}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button className="btn btn-primary btn-sm" type="submit">Save</button>
                                <button className="btn btn-sm" type="button" onClick={() => setUpdateFood(null)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageFood;
