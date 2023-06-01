import React from "react";
import Beads from "./Beads";

const ForVariable = ({ title, variable, fiboVariable }) => {
  return (
    <div>
      <h1 className="text-lg md:text-4xl font-light">
        For total
        <span className="font-medium"> {Math.floor(variable).toString()} </span>
        {title}:
      </h1>
      <div className="relative w-full overflow-x-auto h-16 flex items-center">
        <div className="w-full h-2 rounded-full bg-gray-300" />
        {fiboVariable.map((value, index) => (
          <Beads key={value} index={index} parameter={variable} value={value} />
        ))}
      </div>
    </div>
  );
};

export default ForVariable;
