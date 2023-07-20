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
      providesTags: ['Orders'],
    }),
    setOrderToPay: build.mutation({
      query: (id) => ({
        url: `/order/updateToPay/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetSingleOrderQuery,
  usePayOrderMutation,
  useSetOrderToPayMutation,
} = orderApi;
