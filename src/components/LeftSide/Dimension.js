import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import CustomInput from "./CustomInput";
import state from "../../state";
import { useSnapshot } from "valtio";
import {lengths} from '../../utils/constant';
import AppContext from "../../context/AppContext";

const Dimension = () => {

  const snap = useSnapshot(state);
  const { modelID } =
  React.useContext(AppContext);


  const minX = lengths[modelID].min_width;
  const maxX = lengths[modelID].max_width;

  const minY = lengths[modelID].min_depth;
  const maxY = lengths[modelID].max_depth;

  const h_min = lengths[modelID].min_depth;
  const h_max = lengths[modelID].max_depth;

  const [xWidth, setXWidth] = useState(snap[modelID].length.width);
  const [yWidth, setYWidth] = useState(snap[modelID].length.depth);
  const [height, setHeight] = useState(snap[modelID].length.height_1);

  const handleXSliderChange = (event, newVal) => {
    setXWidth(newVal);
    if (newVal > lengths[modelID].mid_length_limit) {
      if (snap[modelID].columns.isShift[4] === false) {
        state[modelID].columns.isShift[4] = true;
        state[modelID].columns.pos[4] = snap[modelID].columns.maxPos * 1.5;
        state[modelID].columns.added[4] = true;
      }
      if (snap[modelID].columns.isShift[6] === false) {
        state[modelID].columns.isShift[6] = true;
        state[modelID].columns.pos[6] = snap[modelID].columns.maxPos * 1.5;  
        state[modelID].columns.added[6] = true;
      }
    }
    state[modelID].length.width = newVal;
  };

  const handleYSliderChange = (event, newVal) => {
    setYWidth(newVal);
    state[modelID].length.depth = newVal;
  };

  const handleHSliderChange = (event, newVal) => {
    setHeight(newVal);
    state[modelID].length.height_1 = newVal;
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
        if (_val > lengths[modelID].mid_length_limit) {
          if (snap[modelID].columns.isShift[4] === false) {
            state[modelID].columns.isShift[4] = true;
            state[modelID].columns.pos[4] = snap[modelID].columns.maxPos * 1.5;
            state[modelID].columns.added[4] = true;
          }
          if (snap[modelID].columns.isShift[6] === false) {
            state[modelID].columns.isShift[6] = true;
            state[modelID].columns.pos[6] = snap[modelID].columns.maxPos * 1.5;  
            state[modelID].columns.added[6] = true;
          }
        }
            state[modelID].length.width = _val;
        break;
      case "yWidth":
        // if (_val < minY ) _val = minY;
        if (_val > maxY ) _val = maxY;
        setYWidth(_val);
        state[modelID].length.depth = _val;
        break;
      case "height":
        // if (_val < h_min ) _val = h_min;
        if (_val > h_max ) _val = h_max;
        setHeight(_val);
        state[modelID].length.height_1 = _val;
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
          state[modelID].length.width = xWidth + 1;
        }
        break;
      case "yWidth":
        if (validationVal(minY, maxY, yWidth + 1)) {
          setYWidth(yWidth + 1);
          state[modelID].length.depth = yWidth + 1;
        }
        break;
      case "height":
        if (validationVal(h_min, h_max, height + 1)) {
          setHeight(height + 1);
          state[modelID].length.height_1 = height + 1;
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
          state[modelID].length.width = xWidth - 1;
        }
        break;
      case "yWidth":
        if (validationVal(minY, maxY, yWidth - 1)) {
          setYWidth(yWidth - 1);
          state[modelID].length.depth = yWidth - 1;
        }
        break;
      case "height":
        if (validationVal(h_min, h_max, height - 1)) {
          setHeight(height - 1);
          state[modelID].length.height_1 = height - 1;
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

export default Dimension
