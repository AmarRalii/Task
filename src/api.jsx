 
 // function to get the customer only 
 export const getCustomers = () => {
   return fetch(`${process.env.PUBLIC_URL}/data.json`)
   .then(response => response.json())
   .then(data => data.customers);
  };
  
  // function to get the Transaction only 
export const getTransactions = () => {
  return fetch(`${process.env.PUBLIC_URL}/data.json`)
    .then(response => response.json())
    .then(data => data.transactions);
};
