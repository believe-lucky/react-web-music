import { createSlice } from '@reduxjs/toolkit'
function filterRepeat(state, str) {
  return state.includes(str)
}
export const headSlice = createSlice({
  name: 'headSlice',
  initialState: {
    searchHistory: []
  },
  reducers: {
    addHistory: (state,payload) => {
      !filterRepeat(state.searchHistory,payload.payload) && state.searchHistory.push(payload.payload)
    },
    clearHistory: state => {
      state.searchHistory = []
    }
  }
})

export const { addHistory, clearHistory } = headSlice.actions

export default headSlice.reducer