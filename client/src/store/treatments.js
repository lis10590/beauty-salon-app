import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewTreatment,
  getTreatments,
  deleteTreatment,
} from "../api/treatments";

const initialTreatmentsState = {
  treatments: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const treatmentAddition = createAsyncThunk(
  "treatments/newTreatment",
  async (treatment, thunkAPI) => {
    try {
      return await addNewTreatment(treatment);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllTreatments = createAsyncThunk(
  "treatments/getTreatments",
  async (thunkAPI) => {
    try {
      return await getTreatments();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteOneTreatment = createAsyncThunk(
  "treatments/deleteTreatment",
  async (treatmentId, thunkAPI) => {
    try {
      return await deleteTreatment(treatmentId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// [
//   {
//     id: "1",
//     treatmentName: "Manicure",
//     price: 70,
//   },
//   {
//     id: "2",
//     treatmentName: "Pedicure",
//     price: 120,
//   },
//   {
//     id: "3",
//     treatmentName: "Gel Nail Polish",
//     price: 100,
//   },
//   {
//     id: "4",
//     treatmentName: "Hair Removal",
//     price: 80,
//   },
//   {
//     id: "5",
//     treatmentName: "Facial Treatment",
//     price: 250,
//   },
// ];

const treatmentsSlice = createSlice({
  name: "treatments",
  initialState: initialTreatmentsState,
  reducers: {
    reset: (state) => initialTreatmentsState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(treatmentAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(treatmentAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatments.push(action.payload);
      })
      .addCase(treatmentAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllTreatments.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTreatments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatments = action.payload;
      })
      .addCase(getAllTreatments.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOneTreatment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneTreatment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatments = state.treatments.filter(
          (treatment) => treatment._id !== action.payload.id
        );
      })
      .addCase(deleteOneTreatment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
  // reducers: {
  //   addTreatment: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(treatmentName, price) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           treatmentName,
  //           price,
  //         },
  //       };
  //     },
  //   },
  // },
});

export default treatmentsSlice.reducer;
export const { reset } = treatmentsSlice.actions;
export const selectAllTreatments = (state) => state.treatments.treatments;
