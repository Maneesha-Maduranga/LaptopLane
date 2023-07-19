import { api } from './api';

const orderApi = api.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: '/order',
        method: 'POST',
        body: data,
      }),
    }),
    getSingleOrder: build.query({
      query: (id) => ({
        url: `/order/${id}`,
      }),
    }),
    payOrder: build.mutation({
      query: (data) => ({
        url: 'https://sandbox.payhere.lk/pay/checkout',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetSingleOrderQuery,
  usePayOrderMutation,
} = orderApi;
