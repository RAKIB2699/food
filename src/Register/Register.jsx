import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const [error, setError] = useState();
    const { Register, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        const passwordExp = /(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (passwordExp.test(password) == false) {
            setError('password must be an uppercase one lowercase and minimum 6 digit')
            return;
        }

        Register(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state || "/")
            })
            .catch((error) => {
                setError(error.message)
            })

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-center text-primary">Register</h2>

                <form onSubmit={handleRegister} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter photo URL"
                            className="input input-bordered w-full"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>


                    <p className="text-sm text-gray-600 text-center">
                        Already have an account? <span className="text-blue-600 underline cursor-pointer"><Link to='/login'>Login</Link></span>
                    </p>


                    <button type="submit" className="btn btn-primary w-full">
                        Register
                    </button>
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Register;