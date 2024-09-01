import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearchParams, User } from "../../types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], ISearchParams>({
      query: (search) => {
        const searchObject = Object.fromEntries(
          Object.entries(search).filter(([_, v]) => !!v),
        );
        return `users?${new URLSearchParams(searchObject).toString()}`;
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
