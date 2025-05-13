import api from "../utils/api";

export const getCurrentUser = () => {
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

