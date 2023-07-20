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
    changePassword: build.mutation({
      query: (data) => ({
        url: '/user/update/password',
        method: 'PATCH',
        body: data,
      }),
    }),
    profile: build.query({
      query: () => ({
        url: '/user/dashboard',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useSignOutMutation,
  useProfileQuery,
  useChangePasswordMutation,
} = authApi;
