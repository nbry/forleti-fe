// Although it seems weird, NewBlogPost context will be tied to the Header.
// The header only appears when the user is logged in.
// Also, the user should be able to make a new BlogPost regardless of where
// they are on the site.

import { createContext } from "react";

export default createContext();
