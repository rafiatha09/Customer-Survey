import React from "react";

function CustomerList({ customers, onDelete }) {
  return (
    <div className="mt-8 grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-2">
      {customers.map((customer, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {customer.customerName}
          </h3>
          <p className="text-gray-800 mb-1">
            Instagram:{" "}
            <a
              href={`https://instagram.com/${customer.instagramUsername}`}
              className="text-blue-500 hover:text-blue-600"
            >
              @{customer.instagramUsername}
            </a>
          </p>
          <p className="text-gray-800">
            Favorite Color:{" "}
            <span className="text-gray-500 font-semibold">
              {customer.favoriteOutfitColor}
            </span>
          </p>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => onDelete(index)}
              className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;
