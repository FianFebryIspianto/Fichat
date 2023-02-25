import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "../features/Api/LoginAPi";
import { authSlice } from "../features/Slice/AuthSlice";
import { chatApi } from "../features/Api/ChatApi";

export default configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(chatApi.middleware),
});
