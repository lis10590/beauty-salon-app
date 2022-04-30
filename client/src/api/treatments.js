import axios from "axios";

const apiUrl = "http://localhost:3001";

//add new treatment
export const addNewTreatment = async (treatment) => {
  try {
    const res = await axios.post(
      `${apiUrl}/api/treatments/newTreatment`,
      treatment
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

//display all treatments
export const getTreatments = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/treatments/getTreatments`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

//delete treatment
export const deleteTreatment = async (treatmentId) => {
  try {
    const res = await axios.delete(`${apiUrl}/api/treatments/deleteTreatment`, {
      data: { treatmentId },
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
