import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL,
});

export const googleAuth = (code) => api.get(`/auth/login/google?code=${code}`);
