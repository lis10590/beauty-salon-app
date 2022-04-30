import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changePassword } from "../api/user";

export const updatePassword = createAsyncThunk(
  "user/changepassword",
  async (passwords, thunkAPI) => {
    try {
      return await changePassword(passwords);
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
//get current password from db
const initialPasswordState = {
  user: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialPasswordState,

  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default userSlice.reducer;

export const selectUser = (state) => state.user;
