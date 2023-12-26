import axios from "axios";
import { jwtDecode } from "jwt-decode";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  // static token;

  static async request(endpoint, data = {}, method = "get", token = null) {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async filterCompanies(searchTerm) {
    let res = await this.request(`companies?name=${searchTerm}`);
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async filterJobs(searchTerm) {
    let res = await this.request(`jobs?title=${searchTerm}`);
    console.log("response filter jobs", res.jobs);
    return res.jobs;
  }

  static async loginUser(username, password) {
    let res = await this.request(`auth/token`, { username, password }, "post");
    // this.token = res.token; // Set the token in the class upon successful login
    // console.log("this.token", token);
    console.log("response", res);
    console.log(res.token);
    return res.token;
  }

  static async registerUser(data) {
    try {
      const res = await this.request(`auth/register`, { ...data }, "post");
      return { token: res.token };
    } catch (error) {
      console.error("Register Error", error);
      // if (error.response?.data === "Username already taken") {
      //   return { error: "Username already taken" };
      // }
      // return { error: "Registration failed" };
      return { error: "Username already taken" };
      // return error;
    }
  }

  static async getUserData(token) {
    const username = JoblyApi.getUsernameByToken(token);

    let res = await this.request(`users/${username}`, {}, "get", token);
    console.log("response getuserData", res.user);
    return res.user;
  }

  static async applyForJob(jobId, token) {
    const username = JoblyApi.getUsernameByToken(token);

    let res = await this.request(
      `users/${username}/jobs/${jobId}`,
      {},
      "post",
      token
    );
    console.log("response applyForJob", res);
    return res;
  }

  static getUsernameByToken(token) {
    // Decode the token to extract user information (username, etc.)
    const decodedToken = jwtDecode(token);
    const username = decodedToken.username;
    return username;
  }

  static async editUserProfile(data, token) {
    const username = JoblyApi.getUsernameByToken(token);

    let res = await this.request(`users/${username}`, data, "patch", token);
    console.log("res", res.user);
    return res.user;
  }
}

// ** PATCH /[username] { user } => { user }
//  *
//  * Data can include:
//  *   { firstName, lastName, password, email }
//  *
//  * Returns { username, firstName, lastName, email, isAdmin }

export default JoblyApi;

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
