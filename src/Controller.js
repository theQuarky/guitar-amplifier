import React from "react";

export default function Controller({ name, options, handleChange, value }) {
  return (
    <div className="controller-container">
      <label>{name}:</label>
      <input
        type="range"
        min={options.min}
        max={options.max}
        step={options.step}
        value={value}
        onChange={handleChange}
        id={name}
      />
    </div>
  );
}
