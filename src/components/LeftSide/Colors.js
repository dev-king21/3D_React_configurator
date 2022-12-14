import React, { useState } from "react";
import { CirclePicker } from "react-color";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { wooddesign } from "../../utils/constant";
import ImageList from "@mui/material/ImageList";
import state from "../../state";
import { useSnapshot } from "valtio";
import AppContext from "../../context/AppContext";


export default function Colors() {
  const snap = useSnapshot(state);
  const [colorType, setColorType] = useState("textured");
  const { modelID } =
    React.useContext(AppContext);

  const selected = (selected_url) => {
    wooddesign.forEach((item) => {
      if (item.url === selected_url) {
        document.getElementById(item.url).style.opacity = 1.0;
        document.getElementById(item.url).style.border = "5px solid #31d84a";
      } else {
        document.getElementById(item.url).style.border = "0px";
        document.getElementById(item.url).style.opacity = 0.7;
      }
    });
    state[modelID].blades.texture = selected_url;
  };

  const handleChange = (event) => {
    if (event.target.value === "wooddesign") {
      state[modelID].isTexture = true;
      document.getElementsByClassName("woodStyle")[0].style.display = "grid";
      document.getElementsByClassName("bladeColor")[0].style.display = "none";
    } else {
      state[modelID].isTexture = false;
      document.getElementsByClassName("woodStyle")[0].style.display = "none";
      document.getElementsByClassName("bladeColor")[0].style.display = "flex";
    }
    setColorType(event.target.value);
    state[modelID].blades.texture = wooddesign[0].url;
  };

  return (
    <div className="colorPicker mt-5 content-main">
      <h6>Color structure and columns</h6>
      <CirclePicker
        className="mt-3"
        color={snap[modelID].structure.color}
        onChange={(color) => {
          state[modelID].isDesign = false;
          state[modelID].structure.color = color.hex;
        }}
      />

      <FormControl className="mt-5 mb-3">
        <FormLabel id="demo-radio-buttons-group-label">Color Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={colorType}
          onChange={handleChange}
        >
          <FormControlLabel
            value="textured"
            control={<Radio />}
            label="Textured"
          />
          <FormControlLabel
            value="wooddesign"
            control={<Radio />}
            label="Wooddesign"
          />
        </RadioGroup>
      </FormControl>
      <h6>Color Blades</h6>
      <CirclePicker
        className="mt-3 bladeColor"
        color={snap[modelID].blades.color}
        onChange={(color) => {
          state[modelID].isDesign = false;
          state[modelID].blades.color = color.hex;
        }}
      />

      <ImageList variant="woven" cols={2} gap={15} className="mt-3 woodStyle" sx={{ display: 'none' }}>
        {wooddesign.map((item) => (
          <label for={item.title}>
            <img
              src={item.url}
              alt={item.url}
              id={item.url}
              className="styleImage"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                selected(item.url);
              }}
            />
            {item.title}
          </label>
        ))}
      </ImageList>
    </div>
  );
}
