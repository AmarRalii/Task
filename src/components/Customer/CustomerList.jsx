// src/components/Customer/CustomerList.jsx
import React, { useEffect, useState } from "react";

import Chart from "../Chart/Chart";
import img from '../../assets/088cc0362366334efb57c50c474420cd.jpeg'
import chartImg from '../../assets/Screenshot 2024-07-13 143343.png'
import { getCustomers , getTransactions} from '../../api';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getCustomers().then(setCustomers);
    getTransactions().then(setTransactions);
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const customerMatch = filteredCustomers.some(
      (customer) => customer.id === transaction.customer_id
    );
    const amountMatch = transaction.amount.toString().includes(filter);
    return customerMatch || amountMatch;
  });

  return (
    <div className="container customer">
      <div class="form">
        <input
          class="input"
          placeholder="Type your text"
          required=""
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
        <span class="input-border"></span>
      </div>

      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="tran">Transactions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id} onClick={() => handleCustomerClick(customer)}>
              <td className="name-img">  <img src={img} alt="" /> {customer.name}</td>
              <td >
                {filteredTransactions
                  .filter(
                    (transaction) => transaction.customer_id === customer.id
                  )
                  
                  .map((transaction) => (
                    <div key={transaction.id}>
                      <div className="">  ${transaction.amount} on {transaction.date}  </div>
                    </div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart">
      <h2 className="py-4">Transactions <span className="text-danger">Chart </span> </h2>
     {selectedCustomer?  selectedCustomer && (
        <Chart
          transactions={filteredTransactions.filter(
            (t) => t.customer_id === selectedCustomer.id
          )}
        />
      ): <img src={chartImg} className="" alt=" Chart image "/>}
       
      </div>
      
    </div>
  );
};

export default CustomerList;
