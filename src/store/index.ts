import { configureStore } from "@reduxjs/toolkit";

import headerStoreSlice from "@/store/headerStoreSlice";
import themeStoreSlice from "./themeStoreSlice";
import emitSong from './emitSongSlice'

export default configureStore({
  reducer: {
    headerStoreSlice,
    themeStoreSlice,
    emitSong,
  },
});
