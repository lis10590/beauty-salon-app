import axios from "axios";

const apiUrl = "http://localhost:3001";

export const addNewClient = async (client) => {
  try {
    const res = await axios.post(`${apiUrl}/api/clients/newClient`, client);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getClients = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/clients/getClients`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteClient = async (clientId) => {
  try {
    const res = await axios.delete(`${apiUrl}/api/clients/deleteClient`, {
      data: { clientId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
