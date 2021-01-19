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
