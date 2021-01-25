import axios from "axios";

class BackendApi {
  // Function to provide backbone for making HTTP requests to the Backend API
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:5000";
    const token = localStorage.getItem("_token");

    // Backend is using Flask Praetorian, and if
    // visiting a "protected" route, the token must be in the header.
    const headers = { Authorization: `Bearer ${token}` };

    // console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb.
      return (
        await axios({
          method: verb,
          url: `${BASE_URL}/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData,
          headers: { ...headers },
        })
      ).data;
    } catch (err) {
      // console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // ********************
  // AUTH
  static async signup({ username, password, email }) {
    let res = await this.request(
      "signup",
      { username, password, email },
      "post"
    );
    return res;
  }

  static async login({ username, password }) {
    let res = await this.request("login", { username, password }, "post");
    return res;
  }

  static async logout() {
    localStorage.clear();
  }

  // ********************
  // USER AUTH AND PROFILE
  static async getLoggedInUser() {
    // This method takes advantage of the /home route on the backend and the
    // funcationality of this.request attaching a token to the header. The token
    // has the logged in user's id in the payload, which is why no arguments need
    // to be passed in to this function.

    let user_info = await this.request("home");
    return user_info;
  }

  static async getUserByUsername(username) {
    try {
      let user_info = await this.request(`user/${username}`);
      return user_info;
    } catch (e) {
      return null;
    }
  }

  // ********************
  // USER SETTINGS
  static async changeSetting({ category, setting, changeTo, password = null }) {
    let res = await this.request(
      "settings/change",
      { category, setting, changeTo, password },
      "post"
    );
    return res;
  }

  static async removeAccount({ password }) {
    let res = await this.request("account/remove", { password }, "delete");
    return res;
  }

  // ********************
  // BLOG POST
  static async createNewBlogPost({ title, content }) {
    let blog_post = await this.request("bp/new", { title, content }, "post");
    return blog_post;
  }

  static async deleteBlogPost(blogpost_id) {
    let res = await this.request(`bp/${blogpost_id}/delete`, {}, "delete");
    return res;
  }

  static async editBlogPost({ blogpost_id, title, content }) {
    let res = await this.request(
      `bp/${blogpost_id}/edit`,
      { title, content },
      "patch"
    );
    return res;
  }
}

export default BackendApi;
