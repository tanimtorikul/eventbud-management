import React from "react";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
  const { name, image, price, description, id } = service;
  return (
    <div className="mb-10 p-4 md:p-0">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-green-500 text-lg font-semibold">{price}</p>
            <Link to={`/services/${id}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
