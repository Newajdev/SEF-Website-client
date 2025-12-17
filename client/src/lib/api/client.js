import axios from "axios";

// Base URL is configured via environment variable.
// Set NEXT_PUBLIC_API_BASE_URL in your .env.local file.
const API_BASE_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_BASE_URL) ||
  "";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Optional: attach auth token from storage (customize as needed later)
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const apiGet = (url, config) => apiClient.get(url, config);
export const apiPost = (url, data, config) => apiClient.post(url, data, config);
export const apiPut = (url, data, config) => apiClient.put(url, data, config);
export const apiDelete = (url, config) => apiClient.delete(url, config);
