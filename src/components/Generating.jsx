import React from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/90 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
      AI is generating
    </div>
  );
};

export default Generating;
