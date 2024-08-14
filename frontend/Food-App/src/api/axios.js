import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://gu-intern-week-6-food-app.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;
