import api from "../utils/api";

const getUsers = (pageIndex, pageSize, search, type) => {
  return new Promise((resolve, reject) => {
    api
      .get("v1/User/GetAllByFilter", {
        params: { pageSize, pageIndex, search, type },
      })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

const postUsers = (userData) => {
  return new Promise((resolve, reject) => {
    api
      .post("/v1/User", userData)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

const putUsers = (userData) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/v1/User/`, userData)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

const deleteUser = (userData) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`/v1/User/`, userData)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export { getUsers, postUsers, putUsers, deleteUser };
