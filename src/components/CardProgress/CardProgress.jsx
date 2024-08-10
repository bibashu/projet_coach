import React from "react";
import { Button } from "../Button/Button";
export function CardProgress({ title, subtitle, src }) {
  return (
    <div className="flex bg-gray-200 py-3 items-center justify-between mr-5 pl-6 w-full rounded-lg md:max-w-xl hover:bg-gray-100  mt-2">
      <div>
        <h1 className="font-bold mb-2 ">{title}</h1>
        <h5 className="text-xs mb-5">{subtitle}</h5>
        <Button className="bg-black text-white p-2 rounded-lg text-sm">
          Continue
        </Button>
      </div>
      <div>
        <img src={src} className="w-32 h-30" alt="" />
      </div>
    </div>
  );
}
