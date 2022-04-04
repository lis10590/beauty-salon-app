import axios from "axios";

const apiUrl = "http://localhost:3001";

export const addNewTreatmentHistory = async (treatmentHistory) => {
  try {
    const res = await axios.post(
      `${apiUrl}/api/treatmentsHistory/newTreatmentHistory`,
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
      `${apiUrl}/api/treatmentsHistory/getTreatmentHistory`
    );

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
