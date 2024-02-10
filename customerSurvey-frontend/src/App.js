import React, { useState } from "react";
import AddCustomerForm from "./page/AddCustomerForm.js";
import CustomerList from "./page/CustomerList.js";
import "./index.css";

function App() {
  const [customers, setCustomers] = useState([
    {
      customerName: "John Doe",
      instagramUsername: "johndoe123",
      favoriteOutfitColor: "Blue",
    },
    {
      customerName: "Jane Smith",
      instagramUsername: "janesmith456",
      favoriteOutfitColor: "Red",
    },
    {
      customerName: "Alice Johnson",
      instagramUsername: "alicejohnson789",
      favoriteOutfitColor: "Green",
    },
  ]);

  const addCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 space-y-4 flex-col">
        <AddCustomerForm onAdd={addCustomer} />
        <CustomerList customers={customers} onDelete={deleteCustomer} />
      </div>
    </div>
  );
}

export default App;
