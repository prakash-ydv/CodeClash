import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL,
});

export const fetchMYData = (token) => api.post(`/me`, { token });
