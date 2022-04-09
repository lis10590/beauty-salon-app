import axios from "axios";

const apiUrl = "http://localhost:3001";

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

export const getTreatmentHistoryByName = async (fullName) => {
  try {
    const res = await axios.get(
      `${apiUrl}/api/treatmentHistory/getTreatmentHistoryByName`,
      fullName
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
