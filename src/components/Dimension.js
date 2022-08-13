import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import CustomInput from "./CustomInput";
import state from "../state";
import { useSnapshot } from "valtio";
import {lengths} from '../utils/constant';

export default function Dimension() {

  const snap = useSnapshot(state);

  const minX = lengths.min_width;
  const maxX = lengths.max_width;

  const minY = lengths.min_height;
  const maxY = lengths.max_height;

  const h_min = lengths.min_depth;
  const h_max = lengths.max_depth;

  const [xWidth, setXWidth] = useState(snap.length.width);
  const [yWidth, setYWidth] = useState(snap.length.height);
  const [height, setHeight] = useState(snap.length.depth);

  const handleXSliderChange = (event, newVal) => {
    setXWidth(newVal);
    state.length.width = newVal;
  };

  const handleYSliderChange = (event, newVal) => {
    setYWidth(newVal);
    state.length.height = newVal;
  };

  const handleHSliderChange = (event, newVal) => {
    setHeight(newVal);
    state.length.depth = newVal;
  };

  const validationVal = (min, max, val) => {
    if (min > val || val > max) return false;
    else return true;
  };

  const handleValChange = (event, type) => {
    let _val = Number(event.target.value);
    switch (type) {
      case "xWidth":
        // if (_val < minX ) _val = minX;
        if (_val > maxX ) _val = maxX;
        setXWidth(_val);
        state.length.width = _val;
        break;
      case "yWidth":
        // if (_val < minY ) _val = minY;
        if (_val > maxY ) _val = maxY;
        setYWidth(_val);
        state.length.height = _val;
        break;
      case "height":
        // if (_val < h_min ) _val = h_min;
        if (_val > h_max ) _val = h_max;
        setHeight(_val);
        state.length.depth = _val;
        break;
      default:
        break;
    }
  };

  const handlePlusChange = (type) => {
    switch (type) {
      case "xWidth":
        if (validationVal(minX, maxX, xWidth + 1)) {
          setXWidth(xWidth + 1);
          state.length.width = xWidth + 1;
        }
        break;
      case "yWidth":
        if (validationVal(minY, maxY, yWidth + 1)) {
          setYWidth(yWidth + 1);
          state.length.height = yWidth + 1;
        }
        break;
      case "height":
        if (validationVal(h_min, h_max, height + 1)) {
          setHeight(height + 1);
          state.length.depth = height + 1;
        }
        break;
      default:
        break;
      }
  };

  const handleMinusChange = (type) => {
    switch (type) {
      case "xWidth":
        if (validationVal(minX, maxX, xWidth - 1)) {
          setXWidth(xWidth - 1);
          state.length.width = xWidth - 1;
        }
        break;
      case "yWidth":
        if (validationVal(minY, maxY, yWidth - 1)) {
          setYWidth(yWidth - 1);
          state.length.width = yWidth - 1;
        }
        break;
      case "height":
        if (validationVal(h_min, h_max, height - 1)) {
          setHeight(height - 1);
          state.length.height = height - 1;
        }
        break;
      default:
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
          <div>{minX}</div>
          <Slider
            size="small"
            color="primary"
            value={typeof xWidth === "number" ? xWidth : minX}
            onChange={handleXSliderChange}
            className="mx-1"
            min={minX}
            max={maxX}
          />
          <div>{maxX}</div>
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
          <div>{minY}</div>
          <Slider
            size="small"
            color="primary"
            value={typeof yWidth === "number" ? yWidth : minY}
            onChange={handleYSliderChange}
            className="mx-1"
            min={minY}
            max={maxY}
          />
          <div>{maxY}</div>
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
