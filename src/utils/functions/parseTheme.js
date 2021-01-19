import myColors from "utils/static/colors";
import profileThemes from "utils/static/profileThemes";

function parseTheme(themeNumber = null) {
  let background = myColors.defaultBackground;
  let board = myColors.defaultBoard;

  if (themeNumber) {
    background = profileThemes[themeNumber - 1].background;
    board = profileThemes[themeNumber - 1].board;
  }

  return { background, board };
}

export default parseTheme;
