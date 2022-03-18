import request from "superagent";
import { Navigate } from "react-router-dom";

const apiUrl = "http://localhost:3001";

export const postRegister = (user) => {
  request
    .post(`${apiUrl}/api/auth/register`)
    .send(user)
    .then((res) => res.body)
    .catch(Error);
};

export const postLogin = (user) =>
  request
    .post(`${apiUrl}/api/auth/login`)
    .send(user)
    .then((res) => {
      return JSON.stringify(res.body.message);
    })
    .catch(Error);
