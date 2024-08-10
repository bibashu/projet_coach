import React from "react";
import { Laptop } from "react-bootstrap-icons";
import { Button } from "../Button/Button";

export function Card({ title, icon, subtitle }) {
  return (
    <div className=" p-4 bg-white border text-center border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center mb-2"> {icon}</div>
      <a href="#">
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
      </a>
      <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">
        {subtitle}
      </p>
      <Button className="bg-orange-500 text-white py-2 px-2 rounded text-sm">
        Get Started
      </Button>
    </div>
  );
}
