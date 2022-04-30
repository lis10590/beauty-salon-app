import axios from "axios";

const apiUrl = "http://localhost:3001";

// const transformData = (response) => {
//   response.map((client) => {
//     client.treatmentHistory.
//   });
// };

export const addNewClient = async (client) => {
  try {
    const res = await axios.post(`${apiUrl}/api/clients/newClient`, client);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const addNewClientFromCalendar = async (client) => {
  try {
    const res = await axios.post(
      `${apiUrl}/api/clients/newClientFromCalendar`,
      client
    );
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

export const updateClient = async (client) => {
  try {
    const res = await axios.put(`${apiUrl}/api/clients/updateClient`, client);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
