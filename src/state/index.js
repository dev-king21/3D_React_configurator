import { proxy } from "valtio";
import {lengths} from '../utils/constant'

// Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.
const state = proxy({
  isDesign: null,
  isTexture: null,
  designStyle: null,
  blades: {
    color: '#ffffff',
    texture: '',
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
  }
});

export default state