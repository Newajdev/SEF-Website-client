import { apiPost, apiGet } from "./client";

// Placeholder endpoints – replace with real paths when backend is ready.
const ENDPOINTS = {
  login: "/auth/login", // e.g. /auth/login
  me: "/auth/me", // e.g. /auth/me
};

export const login = (credentials) => apiPost(ENDPOINTS.login, credentials);

export const getCurrentUser = () => apiGet(ENDPOINTS.me);
