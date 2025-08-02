
import React from "react";

export default function PhoneCard({ phone }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img
        src={phone.image}
        alt={phone.name}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {phone.name}
        </h3>
        <p className="text-gray-500">{phone.brand}</p>
        <p className="text-lg font-bold text-green-600 mt-2">{phone.price}</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
}