import { api } from './api';

const reviewApi = api.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: '/review',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = reviewApi;
