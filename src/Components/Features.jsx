import React from "react";
import { FaRocket, FaMobileAlt, FaSmile } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaRocket className="text-blue-600 w-6 h-6" />,
      title: "Fast Performance",
      desc: "Experience lightning-fast phone performance.",
    },
    {
      icon: <FaMobileAlt className="text-blue-600 w-6 h-6" />,
      title: "Responsive Design",
      desc: "Looks great on any device.",
    },
    {
      icon: <FaSmile className="text-blue-600 w-6 h-6" />,
      title: "User Friendly",
      desc: "Intuitive UI that anyone can use.",
    },
  ];

  return (
    <section className="py-10 px-4 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow">
            <div className="mb-4 text-3xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}