import api from "../utils/api";

const getApplication = () => {
  return api.get("v1/Application").then((res) => res.data);
};

export default getApplication;
