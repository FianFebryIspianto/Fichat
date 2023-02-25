import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
