//  AVAILABLE PROFILE THEMES HERE. THIS DOESN'T NOT NEED TO BE ORDERED, BUT THEMES MUST BE GIVEN A
// UNIQUE VALUE:
//  a. value, which dicat
//  b. background color
//  c. "board" i.e. mid section color
//  d. title, which dictates what will show up to the client

import colors from "./colors";

const profileThemes = {
  1: {
    value: "default",
    title: "Default - Navy & Pink",
    background: colors.defaultBackground,
    board: colors.defaultBoard,
  },
  2: {
    value: "plainAndSimple",
    title: "Plain & Simple",
    background: "black",
    board: "white",
  },
  3: {
    value: "ranger",
    title: "Ranger",
    background: "green",
    board: "orange",
  },
};

export default profileThemes;
