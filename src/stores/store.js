import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../features/Api/LoginAPi";
import { authSlice } from "../features/Slice/AuthSlice";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
