// List Settings Types that are available to Forleti Users.
//
// 1. Settings are grouped by category in an array
// 2. The category value is client-facing and must be formatted (cannot be null)
// 3. Individual settings are grouped in a settings array. Order dictates how
//    it shows up on the page.
// 4. Each individual setting must have a title, value, and description.
//    a. The title is client-facing and must be formatted (can be null)
//    b. The form value dictates which React Component is rendered in the dialog.
//       At the present, can be either "account", "bio", or "remove account"
//    b. The value is set to match the "loggedInUser" object from LoginContext (cannot be null)
//    c. The desciption is client facing and must be formatted (can be null)

const userSettings = [
  {
    category: "Account",
    settings: [
      {
        title: "Username",
        form: "account",
        value: "username",
        description:
          "Your username is displayed on your profile. It must be unique and longer than 6 characters. Changing your username will change the URL of your blog profile.",
      },
      {
        title: "Email",
        form: "account",
        value: "email",
        description:
          "At the moment, we do not allow changes to email address tied to your account.",
      },
      {
        title: "Password",
        from: "account",
        value: "password",
        description:
          "Your password must be 8 characters or longer. We recommend mixing letters, numbers, and symbols for a stronger password.",
      },
    ],
  },
  {
    category: "Profile",
    settings: [
      {
        title: "Bio",
        form: "bio",
        value: "bio",
        description:
          "Your bio is displayed on your profile for others to see. It can be 200 characters long.",
      },
      {
        title: "Theme",
        form: "",
        value: "theme",
        description: "",
      },
      {
        title: "Avatar",
        form: "",
        value: "avatar_url",
        description: "",
      },
      {
        title: "Header Picture",
        form: "",
        value: "header_url",
        description: "",
      },
    ],
  },
  {
    category: "Other",
    settings: [
      {
        title: "Dark Mode",
        form: "",
        value: "dark_mode",
        description: "",
      },
    ],
  },
  {
    category: "Remove Account",
    settings: [
      {
        title: null,
        form: "account",
        value: "remove_account",
        description:
          "We're sad to see you go, but we understand if you need to move on. Please note that your account configurations and posts will be deleted. Your account cannot be recovered after deletion. Are you sure you wish to proceed?",
      },
    ],
  },
];

export default userSettings;
