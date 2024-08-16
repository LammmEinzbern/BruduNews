import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-red-700 mb-4">404</h2>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block py-3 px-6 text-white bg-blue-600 hover:bg-blue-800 rounded-lg transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
