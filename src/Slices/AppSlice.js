import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  notify: false,
  token: "",
  initial: false,
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
  },
});

export const { setIsAuth, setNotify, setToken, setInitail } = AppSlice.actions;
export default AppSlice.reducer;
