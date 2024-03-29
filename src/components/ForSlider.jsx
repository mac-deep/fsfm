import React from "react";

const ForSlider = ({ parameter, setParameter, title, min, max, desc }) => {
  return (
    <div className="p-4 w-full shadow-lg bg-white rounded-lg">
      <h1 className="text-xl md:text-4xl mb-2">{title}</h1>
      <p className="text-xs md:text-base mb-1">{desc}</p>
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
