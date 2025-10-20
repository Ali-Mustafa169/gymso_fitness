import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const signup = (data) => axios.post(`${API_BASE}/auth/signup`, data);
export const login = (data) => axios.post(`${API_BASE}/auth/login`, data);
