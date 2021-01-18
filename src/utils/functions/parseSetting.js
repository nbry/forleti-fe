import profileThemes from "utils/static/profileThemes";

function parseSetting(setting, user) {
  let currentlySetTo;

  if (setting === "password") {
    currentlySetTo = "*****";
  } else if (setting === "theme") {
    const themeIndex = user[setting] - 1;
    const theme = profileThemes[themeIndex] || "default";
    currentlySetTo = theme.name;
  } else if (setting === "dark_mode") {
    currentlySetTo = user[setting] ? "On" : "Off";
  } else if (setting === "remove_account") {
    currentlySetTo = null;
  } else {
    currentlySetTo = user[setting] || "None";
  }

  return currentlySetTo;
}

export default parseSetting;
