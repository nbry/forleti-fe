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
//    d. [optional] maxLength dictates how long a test input can be.
//    e. [mandatory IF optional] minLength dicates the minimum length of a text input
//    d. The value is set to match the "loggedInUser" object from LoginContext (cannot be null)
//    e. The desciption is client facing and must be formatted (can be null)
//    f. changeable is a boolean that dictates if functionality has been implemented to change setting

const userSettings = [
  {
    category: "Account",
    settings: [
      {
        title: "Username",
        changeable: true,
        form: "account",
        inputType: "text",
        maxLength: 15,
        minLength: 6,
        value: "username",
        description: `Your username must be must be unique and between 6 and 15 characters in length.
        Your username will be displayed on your profile and will dictate your profile's address.`,
      },
      {
        title: "Display Name",
        changeable: true,
        form: "account",
        inputType: "text",
        maxLength: 50,
        minLength: 0,
        value: "display_name",
        description: `Your display name acts as your blog's title and is displayed on your profile. 
          It could be your username, your actual name, a nickname, a pseudonym, anything. It can be up to 50 characters long.`,
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
        maxLength: 50,
        minLength: 8,
        value: "password",
        description:
          "Your password must be between 8 to 50 characters in length. We recommend mixing letters, numbers, and symbols for a stronger password.",
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
        maxLength: 200,
        minLength: 0,
        value: "bio",
        description:
          "Describe yourself in 200 characters! Your bio is displayed on your profile for others to see.",
      },
      {
        title: "Theme",
        changeable: true,
        form: "theme",
        inputType: "select",
        value: "theme",
        description: `Personalize your blog by changing the color of the background and "board".
        Changes to your theme will reflect on the appearance of your profile to visitors.`,
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
        form: "remove_account",
        inputType: "",
        value: "remove_account",
        description:
          "We're sad to see you go, but we understand if you need to move on. Please note that your account configurations and posts will be deleted. Your account cannot be recovered after deletion. Are you sure you wish to proceed?",
      },
    ],
  },

  // PRIVACY SETTINGS ARE NOT IMPLEMENTED YET. USE THIS TO DEMONSTRATE CODING WORKFLOW

  // {
  //   category: "Privacy (TESTING)",
  //   settings: [
  //     {
  //       title: "Hide Account",
  //       changeable: true,
  //       form: "account",
  //       inputType: "",
  //       value: "hide_account",
  //       description: "Temporarily hide account from all users",
  //     },
  //     {
  //       title: "Private Profile",
  //       changeable: true,
  //       form: "profile",
  //       inputType: "",
  //       value: "private_profile",
  //       description: "Set your profile content to only be visible to followers",
  //     },
  //   ],
  // },
  
];

export default userSettings;
