import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewTreatmentHistory,
  getTreatmentHistory,
  getTreatmentHistoryByName
} from "../api/treatmentHistory";

const initialTreatmentHistoryState = {
  treatmentHistory: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const treatmentHistoryAddition = createAsyncThunk(
  "treatmentsHistory/newTreatmentHistory",
  async (treatmentHistory, thunkAPI) => {
    try {
      return await addNewTreatmentHistory(treatmentHistory);
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

export const getAllTreatmentHistories = createAsyncThunk(
  "treatmentsHistory/getTreatmentHistory",
  async (thunkAPI) => {
    try {
      return await getTreatmentHistory();
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

export const getAllTreatmentHistoriesByName = createAsyncThunk(
  "treatmentsHistory/getTreatmentHistoryByName",
  async (thunkAPI) => {
    try {
      return await getTreatmentHistoryByName();
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


const TreatmentHistorySlice = createSlice({
  name: "TreatmentHistory",
  initialState: initialTreatmentHistoryState,
  reducers: {
    reset: (state) => initialTreatmentHistoryState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(treatmentHistoryAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(treatmentHistoryAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatmentHistory.push(action.payload);
      })
      .addCase(treatmentHistoryAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllTreatmentHistories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTreatmentHistories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatmentHistory = action.payload;
      })
      .addCase(getAllTreatmentHistories.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getAllTreatmentHistoriesByName.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllTreatmentHistoriesByName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.treatmentHistory = action.payload;
      })
      .addCase(getAllTreatmentHistoriesByName.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default TreatmentHistorySlice.reducer;
export const { reset } = TreatmentHistorySlice.actions;
export const selectAllTreatmentHistories = (state) =>
  state.treatmentHistory.treatmentHistory;
