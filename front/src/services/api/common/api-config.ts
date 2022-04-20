import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL as string,
  withCredentials: true,
});

export default api;
