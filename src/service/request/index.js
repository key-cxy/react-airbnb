import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use((response) => {
      return response.data;
    });
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.request({ ...config, method: "POST" });
  }
}

export default new MyRequest(BASE_URL, TIMEOUT);
