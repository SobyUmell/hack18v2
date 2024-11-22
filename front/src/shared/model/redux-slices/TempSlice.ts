import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  auth: Boolean;
};

const initialState: InitialState = {
  auth: false,
};

export const tempSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload.auth;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = tempSlice.actions;

export default tempSlice.reducer;
