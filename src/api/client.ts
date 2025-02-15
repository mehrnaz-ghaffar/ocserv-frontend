import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://79.175.189.135:8080/api/v1", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
