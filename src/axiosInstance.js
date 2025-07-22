import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3050", // כתובת הבק אנד שלך
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor – מוסיף את הטוקן אוטומטית לכל בקשה
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("User");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;