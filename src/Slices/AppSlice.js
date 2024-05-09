import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  notify: false,
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
  },
});

export const { setIsAuth, setNotify } = AppSlice.actions;
export default AppSlice.reducer;
