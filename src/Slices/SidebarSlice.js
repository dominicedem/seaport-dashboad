import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  overview: true,
  tracking: false,
  maintainance: false,
  surveillance: false,
  terminal: false,
};

const SidebarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setOverview(state, action) {
      state.overview = action.payload;
      state.tracking = initialState.tracking;
      state.maintainance = initialState.maintainance;
      state.surveillance = initialState.surveillance;
      state.terminal = initialState.terminal;
    },
    setTracking(state, action) {
      state.overview = false;
      state.tracking = action.payload;
      state.maintainance = initialState.maintainance;
      state.surveillance = initialState.surveillance;
      state.terminal = initialState.terminal;
    },
    setMaintainance(state, action) {
      state.overview = false;
      state.tracking = initialState.tracking;
      state.maintainance = action.payload;
      state.surveillance = initialState.surveillance;
      state.terminal = initialState.terminal;
    },
    setSurveillance(state, action) {
      state.overview = false;
      state.tracking = initialState.tracking;
      state.maintainance = initialState.maintainance;
      state.surveillance = action.payload;
      state.terminal = initialState.terminal;
    },
    setTerminal(state, action) {
      state.overview = false;
      state.tracking = initialState.tracking;
      state.maintainance = initialState.maintainance;
      state.surveillance = initialState.surveillance;
      state.terminal = action.payload;
    },
  },
});

export const {
  setTerminal,
  setOverview,
  setTracking,
  setMaintainance,
  setSurveillance,
} = SidebarSlice.actions;
export default SidebarSlice.reducer;
