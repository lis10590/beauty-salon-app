import axios from "axios";

const apiUrl = process.env.API_URL;

export const changePassword = async (passwords) => {
  const res = await axios.put(`${apiUrl}/api/user/changepassword`, passwords);
  if (res.data) {
    return res.data;
  } else {
    return { message: "error in getting presponse" };
  }
};
