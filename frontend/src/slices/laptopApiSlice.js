import { api } from './api';

const laptopApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaptop: build.query({
      query: ({ page }) => ({
        url: '/laptop',
        params: {
          page,
        },
      }),
      keepUnusedDataFor: 5,
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
