//  AVAILABLE PROFILE THEMES HERE. THIS DOESN'T NOT NEED TO BE ORDERED, BUT THEMES MUST BE GIVEN A
// UNIQUE VALUE:
//  a. value, which acts as a key... although this may not be necessary anymore
//  b. background color
//  c. "board" i.e. mid section color
//  d. title, which dictates what will show up to the client

import colors from "./colors";

const profileThemes = {
  1: {
    value: "default",
    title: "Forleti Default",
    background: colors.defaultBackground,
    board: colors.defaultBoard,
  },

  2: {
    value: "ranger",
    title: "Ranger",
    background: "#303831",
    board: "#7daf84",
  },

  3: {
    value: "Aqua",
    title: "Aqua",
    background: "#0d292e",
    board: "#c3cfd1",
  },

  4: {
    value: "grayScale",
    title: "Grayscale",
    background: "#1b1b1b",
    board: "#cdcdcd",
  },

  5: {
    value: "warmLibrary",
    title: "Warm Library",
    background: "#281313",
    board: "#594949",
  },

  6: {
    value: "blackberryPie",
    title: "Blackberry",
    background: "#1b1425",
    board: "#dbc9d5",
  },

  7: {
    value: "earthtone",
    title: "Earth tone",
    background: "#110600",
    board: "#dfd2b4",
  },
};

export default profileThemes;
