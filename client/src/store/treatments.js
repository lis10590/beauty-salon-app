import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialTreatmentsState = [
  {
    id: "1",
    treatmentName: "Manicure",
    price: 70,
  },
  {
    id: "2",
    treatmentName: "Pedicure",
    price: 120,
  },
  {
    id: "3",
    treatmentName: "Gel Nail Polish",
    price: 100,
  },
  {
    id: "4",
    treatmentName: "Hair Removal",
    price: 80,
  },
  {
    id: "5",
    treatmentName: "Facial Treatment",
    price: 250,
  },
];

const treatmentsSlice = createSlice({
  name: "treatments",
  initialState: initialTreatmentsState,
  reducers: {
    addTreatment: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(treatmentName, price) {
        return {
          payload: {
            id: nanoid(),
            treatmentName,
            price,
          },
        };
      },
    },
  },
});

export default treatmentsSlice.reducer;
export const { addTreatment } = treatmentsSlice.actions;
export const selectAllTreatments = (state) => state.treatments;
