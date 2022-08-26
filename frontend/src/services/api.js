import Axios from "axios";

const API = Axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
});

const api = (endPoint, data) => {
  endPoint.data = data;
  switch (endPoint.type) {
    case "GET":
      return axiosGet(endPoint);
    default:
      break;
  }
};

export default api;

export const axiosGet = async ({
  address: route,
  data,
  guarded: isGuarded,
}) => {
  try {
    return await API.get(route + (data ? data : ""));
  } catch (error) {
    throw error;
  }
};
