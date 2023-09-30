import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice.js";
import { adminReducer } from "../Pages/admin/Slices/adminSlice.js";
import { bidderReducer } from "../Pages/bidder/Slices/bidderSlice.js";
import { sellerReducer } from "../Pages/seller/Slices/sellerSlice.js";
const store = configureStore({
  reducer: {
    adminData: adminReducer,
    bidderData: bidderReducer,
    sellerData: sellerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export default store;
