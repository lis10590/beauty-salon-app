import axios from "axios";

const apiUrl = "http://localhost:3001";

export const postRegister = async (user) => {
  const res = await axios.post(`${apiUrl}/api/auth/register`, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const postLogin = async (user) => {
  const res = await axios.post(`${apiUrl}/api/auth/login`, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
