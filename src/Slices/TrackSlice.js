import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackSuccess: false,
  trackFail: false,
  terminal: false,
};

const TrackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrackSuccess(state, action) {
      state.trackSuccess = action.payload;
    },
    setTrackFail(state, action) {
      state.trackFail = action.payload;
    },
    setTerminal(state, action) {
      state.terminal = action.payload;
    },
  },
});

export const { setTrackSuccess, setTrackFail, setTerminal } =
  TrackSlice.actions;
export default TrackSlice.reducer;
