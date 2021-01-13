import axios from "axios";

class BackendAPI {
  // Function to provide backbone for making HTTP requests to the Backend API
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
    const token = localStorage.getItem("_token");

    // Backend is using Flask Praetorian, and if
    // visiting a "protected" route, the token must be in the header.
    const headers = { Authorization: `Bearer ${token}` };

    console.debug("API Call:", endpoint, paramsOrData, verb);

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
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async login({ username, password }) {
    let res = await this.request("login", { username, password }, "post");
    return res;
  }
}

export default BackendAPI;