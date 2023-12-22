import axios from "axios";

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
  static token;

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

  static async loginUser(username, password) {
    let res = await this.request(`auth/token`, { username, password }, "post");
    console.log("response", res);
    console.log(res.token);
    return res.token;
  }

  static async registerUser(data) {
    let res = await this.request(`auth/register`, { ...data }, "post");
    console.log("response", res);
    return res.token;
  }

  static async getUserData(username, token) {
    let res = await this.request(`users/${username}`, {}, "get", token);
    console.log("response getuserData", res);
    return res;
  }

  static async applyForJob(username, jobId, token) {
    let res = await this.request(
      `users/${username}/jobs/${jobId}`,
      {},
      "post",
      token
    );
    console.log("response applyForJob", res);
    return res;
  }

  // router.post("/:username/jobs/:id"
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
