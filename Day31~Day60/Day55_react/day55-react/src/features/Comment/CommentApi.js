import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints : (builder) => ({
    getComments: builder.query({
      query: (postId) => `/comments?postId=${postId}`
    })
  })
});

// postApi에서
export const {useGetCommentsQuery} = commentApi;
