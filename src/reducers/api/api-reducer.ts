import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: () => ({}),
});
