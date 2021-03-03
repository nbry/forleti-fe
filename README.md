# Forleti - Frontend
The Forleti project is an implementation of a settings menu for a rapidly growing social media application. This project was built with focuses on ease of development and collaboration.  Forleti utilizes a modular programming style, clear annotations, and expressive tests.

This repository is the React front end for the blogging app. It renders components dynamically based on a "Plain Old JavaScript Object" (POJO). The eventual goal is for the front end to render dynamically from JSON files, so developers unfamiliar with front end conventions (or even non-developers) can modify the settings menu.

Check out the Backend Repository [here!](https://github.com/nbry/forleti-be)

## Why focus on settings? Isn't that a little boring?

- Every application needs to have configurable settings.
- Modifiable settings that work as expected can cause loss off client interest and/or confidence in the application.
- The settings menu for popular social media sites can be extraordinarily complex. Often I find myself spending *more* time on a decent settings menu for my other projects.
- Ensuring ease of development will minimize frustration and offer improvements in the speed and accuracy of development.

## Developer Features:

- **Developer Utility Files For Dynamic Rendering - The Pride and Joy of the Frontend**

	Developers can modify a POJO to customize and add features to the menu. By simply modifying this file, developers will observe the the **dynamic rendering of visuals, modals, and functionality for added features.** This feature is CRUCIAL for ease of development particularly for developers not familiar with front-end development (or even for non-developers). Profile themes can also be added/removed by modifying a POJO.

	To observe these files, go the following directory: 

	`/src/utils/static`

	There you'll find the files `userSettings.js` and `profileThemes.js` which handle the dynamic rendering of the settings menu and profile themes. Both files contain instructions.


- **Clean Coding/Separation of Concerns**  

	All components utilize styled-components to separate styles to the bottom of the file. Styled-components allowed for the avoidance of "className hell" that can clutter up a React project.


- **Organized Project Directory**

	Components are kept small and explicit. With the help of styled-components, the Forleti project uses very little CSS files that clutter up the project directory.



## Future Goals for the Forleti Project

#### Developer Features:

- Conventional Commits - For automating patch notes
- JSON-rendered components (as opposed to JavaScript objects)
- Completely implemented microservices architecture (back-end)

#### User Features:

- A fully customized, more user-friendly WYSIWYG editor for creating posts (as opposed to the current default editor)
- Functionality for editing posts
- FAQ
- Landing Page Content
- Dashboard
- A following/upvoting system
- Dark Mode
- Image Uploading
- Email verification

	…and more
