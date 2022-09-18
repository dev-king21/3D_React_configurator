import { proxy } from "valtio";
import {lengths, wooddesign} from '../utils/constant'

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy(
  [{
  isDesign: null,
  isTexture: false,
  designStyle: null,
  blades: {
    color: '#ffffff',
    texture: wooddesign[0].url,
    rotation: false,
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
    adding: false,
    editing: false,
    editingColumn: null,
    minPos: 340,
    maxPos: 1000,
    direction: [true, true, true, true, true, true, true, true],
    removable: [false, false, false, false, true, true, true, true],
    added: [true, true, true, true, false, false, false, false],
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
},
{
  isDesign: null,
  isTexture: false,
  designStyle: null,
  blades: {
    color: '#ffffff',
    texture: wooddesign[0].url,
    rotation: false,
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
    adding: false,
    editing: false,
    editingColumn: null,
    minPos: 340,
    maxPos: 1000,
    direction: [true, true, true, true, true, true, true, true],
    removable: [false, false, false, false, true, true, true, true],
    added: [true, true, true, true, false, false, false, false],
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
}]
);

export default state