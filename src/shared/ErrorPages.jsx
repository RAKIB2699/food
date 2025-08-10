import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      
      {/* Floating circles with green shades */}
      <div
        className="absolute top-10 left-10 w-24 h-24 bg-green-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-green-500 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-300 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "3s", transform: "translate(-50%, -50%)" }}
      />

      <h1 className="text-white text-[12rem] font-extrabold select-none drop-shadow-lg">404</h1>
      <p className="text-white text-3xl sm:text-4xl font-semibold mb-6 drop-shadow-md">
        Oops! Page Not Found
      </p>
      <p className="max-w-xl text-green-100 mb-10 text-lg sm:text-xl drop-shadow-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-block bg-white text-green-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-colors duration-300 select-none"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
