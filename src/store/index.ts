import { configureStore } from "@reduxjs/toolkit";

import headerStoreSlice from "@/store/headerStoreSlice";
import themeStoreSlice from "./themeStoreSlice";
import emitSongId from './emitSongIdSlice'

export default configureStore({
  reducer: {
    headerStoreSlice,
    themeStoreSlice,
    emitSongId
  },
});
