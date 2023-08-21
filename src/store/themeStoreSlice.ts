import { createSlice } from '@reduxjs/toolkit';
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: ''
  },
  reducers: {
    updateTheme: (state, payload) => {
      state.theme = payload.payload
    }
  }
})

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;