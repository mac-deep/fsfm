import React from "react";

const ForSlider = ({ parameter, setParameter, title, min, max }) => {
  return (
    <div className="p-4 w-full">
      <h1 className="font-bold rampart-one uppercase text-4xl mb-4">{title}</h1>
      <div className="flex justify-between items-center">
        <input
          className="w-full mr-4"
          type="range"
          placeholder="tempo"
          max={max}
          min={min}
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
        />
        <input
          type="number"
          className="focus:ring-2 ring-1 outline-none text-center"
          placeholder="tempo"
          max={max}
          min={min}
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ForSlider;
