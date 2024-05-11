import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  notify: false,
  token: "",
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
  },
});

export const { setIsAuth, setNotify, setToken } = AppSlice.actions;
export default AppSlice.reducer;
