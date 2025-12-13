import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    findAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { findAction } = filterSlice.actions;
export default filterSlice.reducer;
