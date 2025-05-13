import api from "../utils/api";

const getUsers = () => {
  return new Promise((reslove, reject) => {
    api
      .get("v1/User/GetAllByFilter")
      .then((res) => {
        reslove(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getUsers;
