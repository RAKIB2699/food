import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Loading from '../Loading';

const NoFoodAnimation = () => (
  <div className="flex flex-col items-center justify-center mt-20 space-y-6">
    <svg
      className="w-32 h-32 animate-bounce text-green-500"
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
        d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.07 4.93a10 10 0 11-14.14 14.14 10 10 0 0114.14-14.14z"
      />
    </svg>
    <p className="text-xl text-gray-600 font-semibold">
      No food found to manage yet.
    </p>
  </div>
);

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [updateFood, setUpdateFood] = useState(null);
  const axiosSecure = useAxiosSecure();

  const { data: foods = [], isLoading, refetch } = useQuery({
    queryKey: ["myFoods"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myFoods?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) return <Loading />;

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
    <div className="px-4 py-8 max-w-[1600px] w-11/12 mx-auto">
      <h2 className="text-2xl md:text-4xl text-primary font-extrabold mb-8 text-center tracking-wide drop-shadow-md">
        Manage Your Foods
      </h2>

      {foods.length === 0 ? (
        <NoFoodAnimation />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
          <table className="min-w-full text-sm md:text-base border-collapse border border-gray-300">
            <thead className="bg-green-100">
              <tr>
                <th className="p-3 border text-left font-semibold text-green-700">Image</th>
                <th className="p-3 border text-left font-semibold text-green-700">Name</th>
                <th className="p-3 border text-left font-semibold text-green-700">Quantity</th>
                <th className="p-3 border text-left font-semibold text-green-700">Expire Date</th>
                <th className="p-3 border text-center font-semibold text-green-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map(food => (
                <tr key={food._id} className="border-t hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                  <td className="p-3 border text-center">
                    <img
                      src={food.image}
                      alt={food.foodName}
                      className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-lg object-cover shadow-sm"
                      loading="lazy"
                    />
                  </td>
                  <td className="p-3 border text-green-900 font-medium">{food.foodName}</td>
                  <td className="p-3 border">{food.quantity}</td>
                  <td className="p-3 border">{food.expireDateTime?.split('T')[0]}</td>
                  <td className="p-3 border space-y-2 flex flex-col items-center justify-center">
                    <button
                      className="w-full md:w-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md transition duration-300 ease-in-out text-sm md:text-base"
                      onClick={() => setUpdateFood(food)}
                      aria-label={`Update ${food.foodName}`}
                    >
                      Update
                    </button>
                    <button
                      className="w-full md:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md transition duration-300 ease-in-out text-sm md:text-base"
                      onClick={() => handleDelete(food._id)}
                      aria-label={`Delete ${food.foodName}`}
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
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="update-food-title"
        >
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg animate-fadeIn">
            <h2 id="update-food-title" className="text-xl md:text-2xl font-bold mb-5 text-green-700 tracking-wide">
              Update Food
            </h2>

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
              <div className="mb-4">
                <label className="label font-semibold text-green-800">Food Name</label>
                <input
                  type="text"
                  name="foodName"
                  defaultValue={updateFood.foodName}
                  className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
                  required
                  autoFocus
                />
              </div>

              <div className="mb-4">
                <label className="label font-semibold text-green-800">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={updateFood.quantity}
                  className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="label font-semibold text-green-800">Pickup Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  defaultValue={updateFood.pickupLocation}
                  className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="label font-semibold text-green-800">Description</label>
                <textarea
                  name="description"
                  defaultValue={updateFood.description}
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-green-400"
                  rows={3}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="label font-semibold text-green-800">Expire Date</label>
                <input
                  type="date"
                  name="expireDateTime"
                  defaultValue={updateFood.expireDateTime?.split('T')[0]}
                  className="input input-bordered w-full focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  className="btn btn-primary btn-sm bg-green-600 hover:bg-green-700 shadow-lg"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="btn btn-sm bg-gray-300 text-gray-800 hover:bg-gray-400"
                  type="button"
                  onClick={() => setUpdateFood(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
