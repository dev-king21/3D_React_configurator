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
    width: lengths[0].int_width,
    depth: lengths[0].int_depth,
    height_1: lengths[0].int_height_1,
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
    width: lengths[1].int_width,
    height_1: lengths[1].int_height_1,
    depth: lengths[1].int_depth,
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