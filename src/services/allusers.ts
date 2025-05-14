import api from "../utils/api";

const getUsers = (PageSize: number, PageIndex: number) => {
  return api
    .get("v1/User/GetAllByFilter", {
      params: {
        PageSize: 21,
        PageIndex,
      },
    })
    .then((res) => res.data);
};

export default getUsers;
