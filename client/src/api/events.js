import axios from "axios";

let apiUrl = "";
if (process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:3001";
} else {
  apiUrl = process.env.API_URL;
}

//helper function to format date
const transformData = (response) => {
  response.map((event) => {
    event.start = new Date(event.start);
    event.end = new Date(event.end);
  });

  return;
};

//new event addition
export const addNewEvent = async (event) => {
  try {
    const res = await axios.post(`${apiUrl}/api/events/newEvent`, event);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

//display all events on calendar
export const getEvents = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/events/getEvents`);
    transformData(res.data);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

//delete event
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
