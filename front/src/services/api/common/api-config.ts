import axios from 'axios';
import tokenInterceptor from './interceptors/token';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL as string,
});

tokenInterceptor(api);

export default api;
