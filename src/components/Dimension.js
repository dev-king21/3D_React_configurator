import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import CustomInput from "./CustomInput";

export default function Dimension() {
  const minDim = 1800;
  const maxDim = 6400;

  const h_min = 1500;
  const h_max = 3000;

  const [xWidth, setXWidth] = useState(3000);
  const [yWidth, setYWidth] = useState(2500);
  const [height, setHeight] = useState(2000);

  const handleXSliderChange = (event, newVal) => {
    setXWidth(newVal);
  };

  const handleYSliderChange = (event, newVal) => {
    setYWidth(newVal);
  };

  const handleHSliderChange = (event, newVal) => {
    setHeight(newVal);
  };

  const validationVal = (min, max, val) => {
    if (min > val || val > max) return false;
    else return true;
  };

  const handleValChange = (event, type) => {
    let _val = event.target.value;
    switch (type) {
      case "xWidth":
        setXWidth(Number(_val));
        break;
      case "yWidth":
        setYWidth(Number(_val));
        break;
      case "height":
        setHeight(Number(_val));
        break;
    }
  };

  const handlePlusChange = (type) => {
    switch (type) {
      case "xWidth":
        if (validationVal(minDim, maxDim, xWidth + 1)) setXWidth(xWidth + 1);
        break;
      case "yWidth":
        if (validationVal(minDim, maxDim, yWidth + 1)) setYWidth(yWidth + 1);
        break;
      case "height":
        if (validationVal(h_min, h_max, height + 1)) setHeight(height + 1);
        break;
    }
  };

  const handleMinusChange = (type) => {
    switch (type) {
      case "xWidth":
        if (validationVal(minDim, maxDim, xWidth - 1)) setXWidth(xWidth - 1);
        break;
      case "yWidth":
        if (validationVal(minDim, maxDim, xWidth - 1)) setYWidth(yWidth - 1);
        break;
      case "height":
        if (validationVal(h_min, h_max, height - 1)) setHeight(height - 1);
        break;
    }
  };

  return (
    <div className="content-main">
      <div className="mb-4 pb-3">
        <span>Side 1-3</span>
        <CustomInput
          val={xWidth}
          type="xWidth"
          handleValChange={handleValChange}
          handlePlusChange={handlePlusChange}
          handleMinusChange={handleMinusChange}
        />
        <div className="d-flex align-items-center mt-3">
          <div>{minDim}</div>
          <Slider
            size="small"
            color="primary"
            value={typeof xWidth === "number" ? xWidth : minDim}
            onChange={handleXSliderChange}
            className="mx-1"
            min={minDim}
            max={maxDim}
          />
          <div>{maxDim}</div>
        </div>
      </div>
      <div className="mb-4 pb-3">
        <span>Side 2-4</span>
        <CustomInput
          val={yWidth}
          type="yWidth"
          handleValChange={handleValChange}
          handlePlusChange={handlePlusChange}
          handleMinusChange={handleMinusChange}
        />
        <div className="d-flex align-items-center mt-3">
          <div>{minDim}</div>
          <Slider
            size="small"
            color="primary"
            value={typeof yWidth === "number" ? yWidth : minDim}
            onChange={handleYSliderChange}
            className="mx-1"
            min={minDim}
            max={maxDim}
          />
          <div>{maxDim}</div>
        </div>
      </div>

      <div>
        <span>Passage height</span>
        <CustomInput
          val={height}
          type="height"
          handleValChange={handleValChange}
          handlePlusChange={handlePlusChange}
          handleMinusChange={handleMinusChange}
        />
        <div className="d-flex align-items-center mt-3">
          <div>{h_min}</div>
          <Slider
            size="small"
            color="primary"
            value={typeof height === "number" ? height : h_min}
            onChange={handleHSliderChange}
            className="mx-1"
            min={h_min}
            max={h_max}
          />
          <div>{h_max}</div>
        </div>
      </div>
    </div>
  );
}
