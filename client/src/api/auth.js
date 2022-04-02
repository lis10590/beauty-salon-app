import superagent from "superagent";
import { Navigate } from "react-router-dom";

const apiUrl = "http://localhost:3001";

export const postRegister = async (user) => {
  try {
    const res = await superagent.post(`${apiUrl}/api/auth/register`, user);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

export const postLogin = async (user) => {
  try {
    const res = await superagent.post("/api/auth/login", user);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};


