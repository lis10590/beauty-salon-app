import axios from "axios";
const apiUrl = "https://beauty-salon-server.onrender.com";
// if (process.env.NODE_ENV === "development") {
//   apiUrl = "http://localhost:3001";
// } else {
//   apiUrl = process.env.API_URL;
// }

export const changePassword = async (passwords) => {
  const res = await axios.put(`${apiUrl}/api/user/changepassword`, passwords);
  if (res.data) {
    return res.data;
  } else {
    return { message: "error in getting response" };
  }
};
