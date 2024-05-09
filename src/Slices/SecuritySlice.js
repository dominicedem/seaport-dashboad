import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zoomImg: "",
  zoom: false,
};

const SecuritySlice = createSlice({
  name: "security",
  initialState,
  reducers: {
    setZoom(state, action) {
      state.zoom = action.payload;
    },
    setZoomImg(state, action) {
      console.log(action);
      state.zoomImg = action.payload;
    },
  },
});

export const { setZoom, setZoomImg } = SecuritySlice.actions;
export default SecuritySlice.reducer;
