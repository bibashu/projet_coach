import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/connexion/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/connexion/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Register" element={<Register />} /> 
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
   
    </Routes>
  </BrowserRouter>
);
