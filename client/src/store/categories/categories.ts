import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base-query";

type categoryType = {
  id: number;
  name: string;
};

type servicesResponseType = {
  categories: categoryType[];
};

export const categoriesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<servicesResponseType, void>({
      query: () => "/categories.json",
      keepUnusedDataFor: 0.0001,
    }),
    getCategory: builder.query<categoryType | undefined, number>({
      query: () => "/categories.json",
      keepUnusedDataFor: 0.0001,
      transformResponse: (
        baseQueryReturnValue: servicesResponseType,
        _,
        id
      ) => {
        return baseQueryReturnValue.categories.find(
          (category) => category.id === id
        );
      },
    }),
  }),
});
