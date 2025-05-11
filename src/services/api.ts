import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_APP_API;
const DARGAH = import.meta.env.DARGAH_URL;
const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    const navigate = useNavigate();

    switch (status) {
      case 403:
        navigate("/server-error");
        break;

      case 404:
        navigate("/not-found");
        break;

      case 500:
        navigate("/forbbiden");
        break;

      case 401:
        alert("لطفاً دوباره وارد شوید.");
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

export default api;
