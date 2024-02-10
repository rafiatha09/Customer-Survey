import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCustomerForm from "./page/AddCustomerForm.js";
import CustomerList from "./page/CustomerList.js";
import "./index.css";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/customers/"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCustomers();
  }, []);

  const addCustomer = (customer) => {
    console.log(customer);
    axios
      .post("http://127.0.0.1:8000/api/customers/", customer)
      .then((response) => {
        console.log("Customer added: ", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
      });
  };

  const deleteCustomer = (customerId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/customers/${customerId}/`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting customer:", error);
      });
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
