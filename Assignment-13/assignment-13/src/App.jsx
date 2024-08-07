import { useState } from "react";
import React from "react";
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/Navbar";
import ProductDetail from "./Components/Product/Product";
import Dashboard from "././Components/Dashboard/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="Signup" element={<Signup />} />
          <Route 
            path="Dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} 
          />
          <Route 
            path="product/:id" 
            element={isAuthenticated ? <ProductDetail /> : <Navigate to="/" />} 
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;