import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Laptops', 'Orders'],
  endpoints: () => ({}),
});
