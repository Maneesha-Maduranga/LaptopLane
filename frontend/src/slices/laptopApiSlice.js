import { api } from './api';

const laptopApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaptop: build.query({
      query: () => ({ url: '/laptop' }),
    }),
    getLaptopDetail: build.query({
      query: (id) => ({
        url: `/laptop/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetLaptopQuery, useGetLaptopDetailQuery } = laptopApi;
