import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => "comments?_limit=10",
    }),
  }),
});

export const {useGetCommentsQuery} = commentApi;