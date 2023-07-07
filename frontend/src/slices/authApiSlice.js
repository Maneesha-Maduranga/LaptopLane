import { api } from './api';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    signOut: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useSignOutMutation } =
  authApi;
