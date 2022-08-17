import { proxy } from "valtio";
import {lengths, wooddesign} from '../utils/constant'

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  isDesign: null,
  isTexture: false,
  designStyle: null,
  blades: {
    color: '#ffffff',
    texture: wooddesign[0].url,
    rotation: [-Math.PI, 0, -2.09],
  },
  structure: {
    color: '#ffffff',
  },
  items: {
    blade: "#ffffff",
    structure: "#ffffff",
    mat6: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
  length: {
    width: lengths.int_width,
    height: lengths.int_height,
    depth: lengths.int_depth,
  },
  columns: {
    editing: false,
    editingColumn: null,
    minPos: 180,
    maxPos: 800,
    pos: [0,0,0,0,0,0,0,0],
    isShift: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  }
});

export default state