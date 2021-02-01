// This function is used to return the user's current state of any given setting.
// It is required because different settings have different default values, formats, etc. 
// For example, "dark mode" is stored in the database as a Boolean, BUT should be displayed as 
// "ON" or "OFF" on the settings page. Although this is conceptually pretty easy, it's better to have
// one centralized location that will take care of issue. Update this function when adding more settings.

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
