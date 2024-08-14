import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://food-app-v9n2.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;
