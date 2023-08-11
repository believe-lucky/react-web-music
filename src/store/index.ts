import { configureStore } from "@reduxjs/toolkit";

import headerStoreSlice from "@/store/headerStoreSlice";

export default configureStore({
  reducer: {
    headerStoreSlice,
  },
});
