// List Settings Types that are available to Forleti Users.
//
// 1. Settings are grouped by category in an array
// 2. The category value is client-facing and must be formatted (cannot be null)
// 3. Individual settings are grouped in a settings array. Order dictates how
//    it shows up on the page.
// 4. Each individual setting must have a title, value, and description.
//    a. The title is client-facing and must be formatted (can be null)
//    b. The value is set to match the "loggedInUser" object from LoginContext (cannot be null)
//    c. The desciption is client facing and must be formatted (can be null)

const userSettings = [
  {
    category: "Account",
    settings: [
      {
        title: "Username",
        value: "username",
        description: "the settings description goes here",
      },
      {
        title: "Email",
        value: "email",
        description: "the settings description goes here",
      },
      {
        title: "Password",
        value: "password",
        description: "the settings description goes here",
      },
    ],
  },
  {
    category: "Profile",
    settings: [
      {
        title: "Bio",
        value: "bio",
        description: "the settings description goes here",
      },
      {
        title: "Theme",
        value: "theme",
        description: "the settings description goes here",
      },
      {
        title: "Avatar",
        value: "avatar_url",
        description: "the settings description goes here",
      },
      {
        title: "Header Picture",
        value: "header_url",
        description: "the settings description goes here",
      },
    ],
  },
  {
    category: "Other",
    settings: [
      {
        title: "Dark Mode",
        value: "dark_mode",
        description: "the settings description goes here",
      },
    ],
  },
  {
    category: "Remove Account",
    settings: [
      {
        title: null,
        value: "remove_account",
        description: "the settings description goes here",
      },
    ],
  },
];

export default userSettings;
