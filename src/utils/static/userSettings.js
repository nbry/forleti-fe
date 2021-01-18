// List Settings Types that are available to Forleti Users.
// Keys are settings categories (e.g. account)
// Value is an array of settings.
// Each setting is represented by it's own array.
// First value is the title that will appear on the Settings page
// Second value is the key used to get a user's current setting

const userSettings = {
  account: [
    ["Username", "username"],
    ["Email", "email"],
    ["Password", "password"],
  ],

  profile: [
    ["Bio", "bio"],
    ["Theme", "theme"],
    ["Avatar", "avatar_url"],
    ["Header Picture", "header_url"],
  ],

  other: [
      ["Dark Mode", "dark_mode"]
  ]
};

export default userSettings;
