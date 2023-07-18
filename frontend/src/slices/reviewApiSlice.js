import { api } from './api';

const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: '/review',
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['Laptop'],
    }),
  }),
});

export const { useCreateReviewMutation } = reviewApi;
