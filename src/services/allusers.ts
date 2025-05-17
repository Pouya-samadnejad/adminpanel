import api from "../utils/api";

const getUsers = (pageIndex, pageSize, search) => {
  return api
    .get("v1/User/GetAllByFilter", {
      params: {
        pageSize,
        pageIndex,
        search,
      },
    })
    .then((res) => res.data);
};

export default getUsers;
