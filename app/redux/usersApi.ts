import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRootObject } from '../types/IInterfaces';

export const usersApi = createApi({
  reducerPath: 'api/users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  endpoints: build => ({
    getUsers: build.query<IRootObject, number>({
      query: (delay = 1) => `users/?delay=${delay}`,
    }),
  }),
});
export const { useGetUsersQuery } = usersApi;
