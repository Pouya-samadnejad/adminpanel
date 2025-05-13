// useAxiosInterceptor.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_APP_API;
const DARGAH = import.meta.env.VITE_DARGAH_URL;

const api = axios.create({
  baseURL: API_BASE,
});

export const useAxiosInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;

        switch (status) {
          case 403:
            navigate("forbidden");
            break;
          case 404:
            navigate("/not-found");
            break;
          case 500:
            navigate("server-error");
            break;
          case 503:
            navigate("server-error");
            break;
          case 401:
            localStorage.removeItem("access_token");
            window.location.href = DARGAH;
            break;
          default:
            console.error("خطای ناشناخته:", status, error);
            alert("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
            break;
        }

        return Promise.reject(error);
      }
    );

    // پاکسازی هنگام حذف کامپوننت
    return () => {
      api.interceptors.response.eject(resInterceptor);
    };
  }, [navigate]);
};

export default api;
