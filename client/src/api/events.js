import axios from "axios";

const apiUrl = "http://localhost:3001";

export const addNewEvent = async (event) => {
  try {
    const res = await axios.post(`${apiUrl}/api/events/newEvent`, event);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getEvents = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/events/getEvents`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const res = await axios.delete(`${apiUrl}/api/events/deleteEvent`, {
      data: { eventId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
