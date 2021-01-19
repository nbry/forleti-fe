import profileThemes from "utils/static/profileThemes";

function parseSetting(setting, user) {
  let currentlySetTo;

  if (setting === "password") {
    currentlySetTo = "*****";
  } else if (setting === "theme") {
    const theme = profileThemes[user.theme].title || "default";
    currentlySetTo = theme;
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
