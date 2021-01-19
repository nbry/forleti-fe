// List Settings Parameters that are available to Forleti Users.
//
// 1. Settings are grouped by category in an array
// 2. The category value is client-facing and must be formatted (cannot be null)
// 3. Individual settings are grouped in a settings array. Order dictates how
//    it shows up on the page.
// 4. Each individual setting must have a title, value, and description.
//    a. The title is client-facing and must be formatted (can be null)
//    b. The form value dictates which React Component is rendered in the dialog.
//       At the present, can be either "account", "bio", or "remove account"
//    c. inputType -> (email is email, username is text... etc.)
//    b. The value is set to match the "loggedInUser" object from LoginContext (cannot be null)
//    c. The desciption is client facing and must be formatted (can be null)

const userSettings = [
  {
    category: "Account",
    settings: [
      {
        title: "Username",
        changeable: true,
        form: "account",
        inputType: "text",
        value: "username",
        description:
          "Your username is displayed on your profile. It must be unique and longer than 6 characters. Changing your username will change the URL of your blog profile.",
      },
      {
        title: "Email",
        changeable: false,
        form: "account",
        inputType: "email",
        value: "email",
        description:
          "At the moment, we do not allow changes to email address tied to your account.",
      },
      {
        title: "Password",
        changeable: true,
        form: "account",
        inputType: "password",
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
        changeable: true,
        form: "bio",
        inputType: "text",
        value: "bio",
        description:
          "Your bio is displayed on your profile for others to see. It can be 200 characters long.",
      },
      {
        title: "Theme",
        changeable: false,
        form: "",
        inputType: "",
        value: "theme",
        description: "",
      },
      {
        title: "Avatar",
        changeable: false,
        form: "",
        inputType: "",
        value: "avatar_url",
        description: "",
      },
      {
        title: "Header Picture",
        changeable: false,
        form: "",
        inputType: "",
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
        changeable: false,
        form: "",
        inputType: "",
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
        changeable: true,
        form: "account",
        inputType: "",
        value: "remove_account",
        description:
          "We're sad to see you go, but we understand if you need to move on. Please note that your account configurations and posts will be deleted. Your account cannot be recovered after deletion. Are you sure you wish to proceed?",
      },
    ],
  },
];

export default userSettings;
