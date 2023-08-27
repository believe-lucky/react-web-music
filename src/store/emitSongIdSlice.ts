import { createSlice } from "@reduxjs/toolkit";

export const emitSongId = createSlice({
  name: 'songId',
  initialState: {
    songDetail: {},
  },
  reducers: {
    emitDetail: (state, payload) => {
      state.songDetail = payload.payload
    }
  }
})

export const { emitDetail } = emitSongId.actions;

export default emitSongId.reducer
