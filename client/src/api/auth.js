import request from "superagent";

const apiUrl = "localhost:3001";

export const postRegister = (user) =>
  request
    .post(`${apiUrl}/api/auth/register`)
    .send(user)
    .then((res) => res.body)
    .catch(err);

export const postLogin = (user) =>
  request
    .post(`${apiUrl}/api/auth/login`)
    .send(user)
    .then((res) => res.body)
    .catch(err);
