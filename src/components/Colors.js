import { useState } from "react";
import { CirclePicker } from "react-color";
import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@mui/material';
import {wooddesign} from '../config/config';
import ImageList from '@mui/material/ImageList';
import state from "../state"
import { useSnapshot } from "valtio";

export default function Colors() {

  const snap = useSnapshot(state);

  const selected = (selected_url) => {
    wooddesign.forEach((item) => {
        if (item.url === selected_url) {
            document.getElementById(item.url).style.opacity = 1.0;
            document.getElementById(item.url).style.border = "5px solid #31d84a";
        }
        else {
            document.getElementById(item.url).style.border = "0px";
            document.getElementById(item.url).style.opacity = 0.7;
          }
    })
    state.items[snap.texture] = selected_url;
  }

  const handleChange = (event) => {
    if (event.target.value === 'Wooddesign') {
      document.getElementsByClassName('woodStyle')[0].style.visibility = 'visible';
      document.getElementsByClassName('bladeColor')[0].style.display = 'none';
    }
    else {
      document.getElementsByClassName('woodStyle')[0].style.visibility = 'hidden';
      document.getElementsByClassName('bladeColor')[0].style.display = 'flex';
    }
  }

  return (
    <div className="colorPicker mt-5">
      <h6>Color structure and columns</h6>
      <CirclePicker
        className="mt-3"
        color={snap.structure.color}
        onChange={(color) => {state.isDesign = false; state.structure.color = color.hex; }}
      />

    <FormControl className = "mt-5 mb-3">
      <FormLabel id="demo-radio-buttons-group-label">Color Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Textured"
        name="radio-buttons-group"
        onChange = {(ev)=>handleChange(ev)}
        >
        <FormControlLabel value="Textured" control={<Radio />} label="Textured" />
        <FormControlLabel value="Wooddesign" control={<Radio />} label="Wooddesign" />
      </RadioGroup>
    </FormControl>
    <h6>Color Blades</h6>
    <CirclePicker
        className="mt-3 bladeColor"
        color={snap.blades.color}
        onChange={(color) => {state.isDesign = false; state.blades.color = color.hex; }}
      />
    
    <ImageList variant="woven" cols={2} gap={15} className="mt-3 woodStyle">
        {wooddesign.map((item) => (
            <label for={item.title}>
                <img
                    src={item.url} 
                    alt={item.url}
                    id={item.url}
                    className = "styleImage"
                    onClick = {(ev)=> {ev.preventDefault(); ev.stopPropagation(); selected(item.url)}}
                />
                {item.title}
            </label>
        ))}
  </ImageList>



    </div>
  );
}
    