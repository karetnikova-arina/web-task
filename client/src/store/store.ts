import { configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "./services";
import { categoriesApi } from "./categories";
import { ReviewsSlice } from "./reviews";

export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ReviewsSlice.name]: ReviewsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      servicesApi.middleware,
      categoriesApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
