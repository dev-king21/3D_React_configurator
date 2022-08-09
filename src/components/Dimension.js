import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "../css/customInputBtn.css";

export default function Dimension() {
  const [xWidth, setXWidth] = useState(3000);
  // const [yWidth, setYWidth] = useState(2500);
  const minDim = 1800;
  const maxDim = 6400;

  const handleXSliderChange = (event, newVal) => {
    setXWidth(newVal);
  };

  return (
    <div>
      <div>
        <div class="number-input">
          <button
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            class="minus"
          ></button>
          <input
            class="quantity"
            min="0"
            name="quantity"
            value="1"
            type="number"
          />
          <button
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            class="plus"
          ></button>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div>{minDim}</div>
        <Slider
          color="primary"
          value={typeof xWidth === "number" ? xWidth : 0}
          onChange={handleXSliderChange}
          className="mx-1"
          min={minDim}
          max={maxDim}
        />
        <div>{maxDim}</div>
      </div>
    </div>
  );
}
