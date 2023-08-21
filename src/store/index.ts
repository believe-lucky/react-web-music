import { configureStore } from "@reduxjs/toolkit";

import headerStoreSlice from "@/store/headerStoreSlice";
import themeStoreSlice from "./themeStoreSlice";

export default configureStore({
  reducer: {
    headerStoreSlice,
    themeStoreSlice,
  },
});
