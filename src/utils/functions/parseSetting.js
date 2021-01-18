import profileThemes from "utils/static/profileThemes";

function parseSetting(setting, user) {
  let currentlySetTo;

  if (setting === "password") {
    currentlySetTo = "*****";
  } else if (setting === "theme") {
    const themeIndex = user[setting] - 1;
    const theme = profileThemes[themeIndex] || "default";
    currentlySetTo = theme.name;
  } else {
    currentlySetTo = user[setting] || "None";
  }

  return currentlySetTo;
}

export default parseSetting;
