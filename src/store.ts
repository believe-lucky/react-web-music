import { configureStore } from '@reduxjs/toolkit'

import headerStoreSlice from './pages/layout/headerStoreSlice'

export default configureStore({
  reducer: {
    headerStoreSlice
  }
})