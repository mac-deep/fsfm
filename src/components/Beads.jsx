import React from "react";

const Beads = ({ value, parameter, index }) => {
  return (
    <div
      //   style={{ marginLeft: `${(value * 100) / parameter}%` }}
      style={{ marginLeft: `${index * 36}px` }}
      className="cursor-pointer absolute bg-white left-0 w-8 h-8 shadow-lg rounded-full flex leading-none justify-center items-center hover:scale-110 transform transition-all"
    >
      <h1 className="absolute text-base font-semibold text-blue-900 leading-none">
        {value}
      </h1>
    </div>
  );
};

export default Beads;
