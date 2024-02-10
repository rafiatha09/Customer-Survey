import React, { useState } from "react";

function AddCustomerForm({ onAdd }) {
  const [name, setname] = useState("");
  const [instagram_username, setinstagram_username] = useState("");
  const [favorite_outfit_color, setfavorite_outfit_color] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, instagram_username, favorite_outfit_color });
    setname("");
    setinstagram_username("");
    setfavorite_outfit_color("");
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
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="input input-bordered w-full py-2 px-4 rounded-lg border-2 border-gray-400 hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
        <input
          type="text"
          placeholder="Instagram Username"
          value={instagram_username}
          onChange={(e) => setinstagram_username(e.target.value)}
          className="input input-bordered w-full py-2 px-4 rounded-lg border-2 border-gray-400 hover:border-gray-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
        <input
          type="text"
          placeholder="Favorite Outfit Color"
          value={favorite_outfit_color}
          onChange={(e) => setfavorite_outfit_color(e.target.value)}
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
