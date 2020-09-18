import React, { useState } from "react";
import "./App.css";
import Controller from "./Controller";
import Visualizer from "./Visualizer";
const CONTROL_OPTION = [
  {
    name: "Volume",
    option: {
      min: "0",
      max: "1",
      step: ".01",
    },
    value: "0.5",
  },
  {
    name: "Bass",
    option: {
      min: "-10",
      max: "10",
      step: "1",
    },
    value: "5",
  },
  {
    name: "Mid",
    option: {
      min: "-10",
      max: "10",
      step: "1",
    },
    value: "5",
  },
  {
    name: "Treble",
    option: {
      min: "-10",
      max: "10",
      step: "1",
    },
    value: "5",
  },
];

function App() {
  const [controls, setControls] = useState(CONTROL_OPTION);

  function handleChange({ target }, indexI) {
    setControls((preControls, value) => {
      return preControls.map((control, indexJ) => {
        if (indexI !== indexJ) return control;
        return { ...control, value: target.value };
      });
    });
  }

  return (
    <div className="App">
      <Visualizer />
      <div className="controller">
      {controls.map((control, index) => {
        return (
          <Controller
            name={control.name}
            key={index}
            options={control.option}
            value={control.value}
            handleChange={(e) => handleChange(e, index)}
          />
        );
      })}{" "}
      </div>
    </div>
  );
}

export default App;
