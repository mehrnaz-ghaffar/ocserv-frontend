import axios from "axios";

const api = axios.create({
  baseURL: "", // Replace with your API endpoint
  headers: {
    "Content-Type": "application/json",
    // Add other default headers if needed
  },
});

export default api;
