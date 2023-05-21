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
    getServices: builder.query<servicesResponseType, undefined>({
      query: () => "/main.json",
      keepUnusedDataFor: 0.0001,
    }),
    getService: builder.query<serviceType | undefined, number>({
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
  }),
});
