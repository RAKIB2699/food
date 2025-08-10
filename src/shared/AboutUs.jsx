import React, { use, useState } from "react";
import { FaLeaf, FaBullseye, FaHandshake, FaUsers, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import img from '../assets/comunity.avif';
import { AuthContext } from "../Provider/AuthProvider";


const AboutUs = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const handleJoinClick = () => {
    if (user) {
      setShowModal(true);
    } else {
      navigate("/signin");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="max-w-[1600px] w-11/12 mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fadeInUp">
            <h2 className="text-4xl font-extrabold text-green-700 mb-4">
              About Foody
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Foody, we are passionate about reducing food waste and spreading happiness by connecting surplus food to those who need it most. Our community-driven platform empowers you to make a difference every day.
            </p>
            <button
              onClick={handleJoinClick}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <FaUsers />
              Join Our Community
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 animate-fadeInRight">
            <img
              src={img}
              alt="Community Food Sharing"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-96"
            />
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp delay-100">
            <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To reduce food waste by building a trusted platform that connects donors with communities in need.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp delay-200">
            <FaBullseye className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              A world where no food goes to waste and everyone has access to nutritious meals.
            </p>
          </div>

          {/* Values */}
          <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp delay-300">
            <FaHandshake className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">
              Community, compassion, transparency, and sustainability guide everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-sm w-full p-6 relative"
            onClick={e => e.stopPropagation()} // prevent close on modal content click
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              You are already part of our community!
            </h3>
            <p className="text-gray-700 mb-6">
              Thank you for being with us. Explore our features or join discussions in the community!
            </p>
            <button
              onClick={closeModal}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
