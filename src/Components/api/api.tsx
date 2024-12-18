import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, 
});

api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('authToken');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
