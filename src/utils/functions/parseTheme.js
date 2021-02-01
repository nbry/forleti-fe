// This function is used to parse a theme based on an integer provided.
// Themes are stored in the database as integeres.  Themes are dictated by
// /utils/static/profileThemes.js.
// If a intenger is not provided, the default theme is returned.
// Use this function when altering the visuals of the BackgroundWrapper component,
// which is used for the Profile, Settings, and Home page of Forleti

import myColors from "utils/static/colors";
import profileThemes from "utils/static/profileThemes";

function parseTheme(themeNumber = null) {
  let background = myColors.defaultBackground;
  let board = myColors.defaultBoard;

  if (themeNumber) {
    background = profileThemes[themeNumber].background;
    board = profileThemes[themeNumber].board;
  }

  return { background, board };
}

export default parseTheme;
