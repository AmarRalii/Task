import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CustomerList from './components/Customer/CustomerList';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <br />
      <CustomerList />
      <Footer/>
    </div>
  
  );
};

export default App;
