import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Loading from '../Loading';
import Swal from 'sweetalert2';

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [notes, setNotes] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://foody-hub-server.vercel.app/foods/${id}`)
      .then((res) => setFood(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleRequest = (e) => {
    e.preventDefault();

    const requestData = {
      ...food,
      status: 'requested',
      requesterEmail: user.email,
      requestDate: new Date().toISOString(),
      notes,
    };

    axios
      .post('https://foody-hub-server.vercel.app/foods/myRequests', requestData)
      .then((res) => {
        console.log(res.data);
        // Close the modal
        const modal = document.getElementById('requestModal');
        if (modal) modal.close();

        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Request submitted successfully!',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          navigate('/availablefood');
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again.',
        });
      });
  };

  if (!food) return <Loading />;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={food.image}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{food.foodName}</h2>
      <p>
        <strong>Quantity:</strong> {food.quantity}
      </p>
      <p>
        <strong>Pickup:</strong> {food.pickupLocation}
      </p>
      <p>
        <strong>Donator:</strong> {food.donorName} ({food.donorEmail})
      </p>
      <p>
        <strong>Expires:</strong> {new Date(food.expireDateTime).toLocaleString()}
      </p>
      <p>
        <strong>Notes:</strong> {food.notes}
      </p>

      {/* Modal Trigger */}
      <button
        onClick={() => document.getElementById('requestModal').showModal()}
        className="btn btn-primary mt-4"
      >
        Request
      </button>

      {/* Modal */}
      <dialog id="requestModal" className="modal">
        <form method="dialog" onSubmit={handleRequest} className="modal-box">
          <h3 className="font-bold text-lg mb-4">Request Food</h3>
          <div className="space-y-2">
            <input
              className="input input-bordered w-full"
              value={food.foodName}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={food.image}
              readOnly
            />
            <input className="input input-bordered w-full" value={food._id} readOnly />
            <input
              className="input input-bordered w-full"
              value={food?.email || ''}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={food.donatorName}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={user?.email || ''}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={new Date().toLocaleString()}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={food.pickupLocation}
              readOnly
            />
            <input
              className="input input-bordered w-full"
              value={food.expireDateTime}
              readOnly
            />
            <textarea
              className="textarea textarea-bordered w-full"
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes..."
              value={notes}
            />
          </div>
          <div className="modal-action">
            <button className="btn mr-2" type="button" onClick={() => document.getElementById('requestModal').close()}>
              Close
            </button>
            <button className="btn btn-primary" type="submit">
              Request
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default FoodDetails;
