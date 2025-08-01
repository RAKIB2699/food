import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';



const AddFood = () => {
    const { user } = use(AuthContext);

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const foodData = Object.fromEntries(formData.entries());

        axios.post('https://foody-hub-server.vercel.app/foods', foodData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-md my-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Add a Food Item</h2>

            <form onSubmit={handleAddFood} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Food Name */}
                <div className="form-control">
                    <label className="label">Food Name</label>
                    <input type="text" name="foodName" placeholder="Enter food name" className="input input-bordered w-full" />
                </div>

                {/* Food Image URL */}
                <div className="form-control">
                    <label className="label">Food Image URL</label>
                    <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full" />
                </div>

                {/* Food Quantity */}
                <div className="form-control">
                    <label className="label">Food Quantity</label>
                    <input type="number" name="quantity" placeholder="Enter quantity" className="input input-bordered w-full" />
                </div>

                {/* Pickup Location */}
                <div className="form-control">
                    <label className="label">Pickup Location</label>
                    <input type="text" name="pickupLocation" placeholder="Enter pickup location" className="input input-bordered w-full" />
                </div>

                {/* Expire Date/Time */}
                <div className="form-control">
                    <label className="label">Expire Date & Time</label>
                    <input type="datetime-local" name="expireDateTime" className="input input-bordered w-full" />
                </div>

                {/* Additional Notes */}
                <div className="form-control md:col-span-2">
                    <label className="label">Additional Notes</label>
                    <textarea name="notes" rows="3" placeholder="Enter any additional notes" className="textarea textarea-bordered w-full"></textarea>
                </div>

                {/* Donor Info (automatically filled from user context - to be implemented later) */}
                <div className="form-control">
                    <label className="label">Donor Name</label>
                    <input type="text" name="donorName" placeholder="Auto-filled" value={user?.displayName || ''} readOnly  className="input input-bordered w-full bg-gray-100" />
                </div>

                <div className="form-control">
                    <label className="label">Donor Email</label>
                    <input type="email" name="donorEmail" placeholder="Auto-filled" value={user?.email || ''} readOnly  className="input input-bordered w-full bg-gray-100" />
                </div>

                {/* Food Status (default: available) */}
                <div className="form-control md:col-span-2">
                    <label className="label">Food Status</label>
                    <input type="text" name="status" defaultValue="available"  disabled className="input input-bordered w-full bg-gray-100" />
                </div>

                {/* Submit Button */}
                <div className="form-control md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full">Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;