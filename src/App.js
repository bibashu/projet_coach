import Layout from "./components/Layout/Layout";
import Login from "./pages/connexion/Login";
import Home from "./pages/Home/Home";
import "./style.css"
import './index.css'; // Ajustez le chemin si nécessaire
import { useState } from "react";


function App() {
  
  return (
   <div className="">
      <Layout >
      <Home />
      </Layout>
      
   </div>
  );
}

export default App;
