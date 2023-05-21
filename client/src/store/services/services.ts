import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base-query";

type serviceType = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  categoryId: number;
};

type servicesResponseType = {
  services: serviceType[];
};

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getServices: builder.query<servicesResponseType, void>({
      query: () => "/main.json",
      keepUnusedDataFor: 0.0001,
    }),
    getServiceById: builder.query<serviceType | undefined, number>({
      query: () => "/main.json",
      keepUnusedDataFor: 0.0001,
      transformResponse: (
        baseQueryReturnValue: servicesResponseType,
        _,
        id
      ) => {
        return baseQueryReturnValue.services.find(
          (service) => service.id === id
        );
      },
    }),
    getServicesByCategoryId: builder.query<serviceType[], number>({
      query: () => "/main.json",
      keepUnusedDataFor: 0.0001,
      transformResponse: (
        baseQueryReturnValue: servicesResponseType,
        _,
        id
      ) => {
        return baseQueryReturnValue.services.filter(
          (service) => service.categoryId === id
        );
      },
    }),
  }),
});
