// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📞 Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
