import api from "../utils/api";

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/v1/user/getcurrentuser")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getCurrentUser;
