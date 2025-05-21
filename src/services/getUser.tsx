import api from "../utils/api";

const getUser = (id) => {
  return api.get(`v1/User/${id}`).then((res) => res.data);
};

export default getUser;
