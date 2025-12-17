import { apiGet, apiPost, apiPut, apiDelete } from "./client";

// Generic helpers with placeholder URLs. Replace paths when wiring real APIs.

export const getResource = (path, config) => apiGet(path, config);

export const createResource = (path, payload, config) =>
  apiPost(path, payload, config);

export const updateResource = (path, payload, config) =>
  apiPut(path, payload, config);

export const deleteResource = (path, config) => apiDelete(path, config);

// Example higher-level helpers (endpoints are placeholders).
export const getDashboardData = () => apiGet("/dashboard"); // TODO: replace with real endpoint

export const createItem = (payload) => apiPost("/items", payload); // TODO: replace with real endpoint

export const updateItem = (id, payload) => apiPut(`/items/${id}`, payload); // TODO: replace with real endpoint

export const deleteItem = (id) => apiDelete(`/items/${id}`); // TODO: replace with real endpoint
