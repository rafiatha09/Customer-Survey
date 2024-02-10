import React, { useState } from "react";

function AddCustomerForm({ onAdd }) {
  const [customerName, setCustomerName] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [favoriteOutfitColor, setFavoriteOutfitColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ customerName, instagramUsername, favoriteOutfitColor });
    setCustomerName("");
    setInstagramUsername("");
    setFavoriteOutfitColor("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto my-10"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Add New Customer</h2>
        <p className="text-gray-600">Fill in the customer details below.</p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="input input-bordered w-full py-2 px-4 rounded-lg border-2 border-gray-400 hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
        <input
          type="text"
          placeholder="Instagram Username"
          value={instagramUsername}
          onChange={(e) => setInstagramUsername(e.target.value)}
          className="input input-bordered w-full py-2 px-4 rounded-lg border-2 border-gray-400 hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
        <input
          type="text"
          placeholder="Favorite Outfit Color"
          value={favoriteOutfitColor}
          onChange={(e) => setFavoriteOutfitColor(e.target.value)}
          className="input input-bordered w-full py-2 px-4 rounded-lg border-2 border-gray-400 hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Add Customer
      </button>
    </form>
  );
}

export default AddCustomerForm;
