import React from "react";
import { FaLeaf, FaBullseye, FaHandshake } from "react-icons/fa";
import img from '../assets/comunity.avif';

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">
            About Foody
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At Foody, we are passionate about reducing food waste and spreading happiness by connecting surplus food to those who need it most. Our community-driven platform empowers you to make a difference every day.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow-md transition-colors duration-300">
            Join Our Community
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
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
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To reduce food waste by building a trusted platform that connects donors with communities in need.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaBullseye className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            A world where no food goes to waste and everyone has access to nutritious meals.
          </p>
        </div>

        {/* Values */}
        <div className="bg-green-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaHandshake className="text-5xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Our Values</h3>
          <p className="text-gray-700">
            Community, compassion, transparency, and sustainability guide everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
