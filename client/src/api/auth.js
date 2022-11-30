import axios from "axios";

const apiUrl = "https://beauty-salon-server.onrender.com";
// if (process.env.NODE_ENV === "development") {
//   apiUrl = "http://localhost:3001";
// } else {
//   apiUrl = process.env.API_URL;
// }

//register a new user
export const postRegister = async (user) => {
  const res = await axios.post(`${apiUrl}/api/auth/register`, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

//login a user
export const postLogin = async (user) => {
  const res = await axios.post(`${apiUrl}/api/auth/login`, user);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

//logout a user

export const logoutUser = () => {
  localStorage.removeItem("user");
};
