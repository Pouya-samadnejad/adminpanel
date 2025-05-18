import api from "../utils/api";

const getUsers = (pageIndex, pageSize, search, type) => {
  return api
    .get("v1/User/GetAllByFilter", {
      params: {
        pageSize,
        pageIndex,
        search,
        type,
      },
    })
    .then((res) => res.data);
};

export default getUsers;
