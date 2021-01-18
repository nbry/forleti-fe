// List Settings Types that are available to Forleti Users.
// Keys are settings categories (e.g. account)
// Value is an array of settings.
// Each setting is represented by it's own array.
// First value is the title that will appear on the Settings page
// Second value is the key used to get a user's current setting

const userSettings = [
  {
    category: "Account",
    values: [
      ["Username", "username"],
      ["Email", "email"],
      ["Password", "password"],
    ],
  },
  {
    category: "Profile",
    values: [
      ["Bio", "bio"],
      ["Theme", "theme"],
      ["Avatar", "avatar_url"],
      ["Header Picture", "header_url"],
    ],
  },
  {
    category: "Other",
    values: [["Dark Mode", "dark_mode"]],
  },
  {
    category: "Remove Account",
    values: [[null, "remove_account"]],
  },
];

export default userSettings;
