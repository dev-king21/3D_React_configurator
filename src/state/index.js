import { proxy } from "valtio";

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
});

export default state