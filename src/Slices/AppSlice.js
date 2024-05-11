import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  notify: false,
  token: "",
  initial: false,
  isTrackId: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setNotify(state, action) {
      state.notify = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setInitail(state, action) {
      state.initial = action.payload;
    },
    setTrackId(state, action) {
      state.isTrackId = action.payload;
    },
  },
});

export const { setIsAuth, setTrackId, setNotify, setToken, setInitail } =
  AppSlice.actions;
export default AppSlice.reducer;
