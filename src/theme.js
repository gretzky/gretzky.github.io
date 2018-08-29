/* media queries */
const breakpoints = ["40em", "52em", "64em"];

/* colors */
const colors = {
  black: "#0C0D11",
  darkgrey: "#9299aa",
  lightgrey: "#bac0cf",
  white: "#f7f9fa",
  green: "#2edfb8",
  purple: "#9a90f4",
  blue: "#83b5ff",
  pink: "#ff7699",
  orange: "#ffba6f",
  red: "#fc8471"
};

const space = [16, 25, 45, 60, 82];

/* font */
const lineHeights = [1.05, 1.125, 1.25, 1.5, 2];

const fontWeights = {
  regular: 400,
  light: 300,
  bold: 700,
  semibold: 600
};

const fontSizes = [13, 15, 18, 20, 24, 26, 32, 35, 43, 47, 57, 63];

const fonts = {
  text: "SF Pro Display",
  code: `'SF Mono', monospace`
};

const border = c => `2px solid ${c}`;

const transitions = {
  easeInOut: "cubic-bezier(0.5, 0, 0.25, 1)"
};

const theme = {
  breakpoints,
  colors,
  space,
  lineHeights,
  fonts,
  border,
  transitions,
  fontSizes,
  fontWeights
};

export default theme;
