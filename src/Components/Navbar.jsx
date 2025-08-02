import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaSearch, FaTrash } from "react-icons/fa";

export default function Navbar({ selectedPhones, setSelectedPhones, searchTerm, setSearchTerm }) {
  const [cartOpen, setCartOpen] = useState(false);

  // Remove phone from cart
  const handleRemove = (id) => {
    setSelectedPhones((prev) => prev.filter((phone) => phone.id !== id));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">📱 PhoneStore</h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search phones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Cart */}
        <div className="relative">
          <button onClick={() => setCartOpen((prev) => !prev)} className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition" />
            {selectedPhones.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {selectedPhones.length}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          <AnimatePresence>
            {cartOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded shadow-md z-50"
              >
                <div className="p-4 max-h-60 overflow-y-auto">
                  {selectedPhones.length === 0 ? (
                    <p className="text-gray-600 text-sm text-center">Your cart is empty</p>
                  ) : (
                    selectedPhones.map((phone) => (
                      <div key={phone.id} className="flex items-center justify-between mb-3">
                        <img src={phone.image} alt={phone.name} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1 ml-3">
                          <p className="text-sm font-medium">{phone.name}</p>
                          <p className="text-xs text-gray-500">{phone.price}</p>
                        </div>
                        <button
                          onClick={() => handleRemove(phone.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}