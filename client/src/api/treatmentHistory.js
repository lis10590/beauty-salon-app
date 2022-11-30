import axios from "axios";

const apiUrl = "https://beauty-salon-server.onrender.com";
// if (process.env.NODE_ENV === "development") {
//   apiUrl = "http://localhost:3001";
// } else {
//   apiUrl = process.env.API_URL;
// }
//add a treatment to client's treatment history
export const addNewTreatmentHistory = async (treatmentHistory) => {
  try {
    const res = await axios.post(
      `${apiUrl}/api/treatmentHistory/newTreatmentHistory`,
      treatmentHistory
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
//display treatment histories in db
export const getTreatmentHistory = async () => {
  try {
    const res = await axios.get(
      `${apiUrl}/api/treatmentHistory/getTreatmentHistory`
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
//display treatment history of a client
export const getTreatmentHistoryByName = async (fullName) => {
  try {
    console.log(fullName);
    const res = await axios.get(
      `${apiUrl}/api/treatmentHistory/getTreatmentHistoryByName`,
      { params: { fullName: fullName } }
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
