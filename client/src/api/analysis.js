import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPurchasedProducts = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/analysis/getPurchasedProducts`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getTreatmentHistory = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/analysis/getTreatmentHistory`);

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
