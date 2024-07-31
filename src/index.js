import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/connexion/Register";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<App />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
