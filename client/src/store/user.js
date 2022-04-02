import { createSlice } from "@reduxjs/toolkit";
//get current password from db
const initialPasswordState = { password: "" };

const userSlice = createSlice({
  name: "user",
  initialState: initialPasswordState,
  reducers: {
    changePassword: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export default userSlice.reducer;
export const { changePassword } = userSlice.actions;
export const selectUser = (state) => state.user;
