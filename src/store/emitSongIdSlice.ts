import { createSlice } from "@reduxjs/toolkit";

export const emitSongId = createSlice({
  name: 'songId',
  initialState: {
    id: ''
  },
  reducers: {
    emitId: (state, payload) => {
      state.id = payload.payload
    }
  }
})

export const { emitId } = emitSongId.actions;

export default emitSongId.reducer
