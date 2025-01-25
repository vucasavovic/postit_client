import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
  });

  // You can add interceptors or configure axios instance here
  axiosInstance.interceptors.request.use(config => {
    // Example: Add auth token to headers (if exists)
    const token = useCookie('token').value;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  // Make the Axios instance available throughout the app
  nuxtApp.provide('axios', axiosInstance);
});