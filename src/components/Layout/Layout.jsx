import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Layout.module.css";
import Home from "../../pages/Home/Home";

export default function Layout({ children}) {
  return (
    <>
      
   
      <Sidebar />
      <Header  />
      
      {children}
    
    </>
  );
}
