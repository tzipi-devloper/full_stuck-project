import apiSlice from "./authSlice";
import { User } from "./authTypes";
const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
        query: () => "/users", 
      providesTags: ["Users"], 
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/users", 
        method: "POST",
        body: newUser, 
      }),
      invalidatesTags: ["Users"], 
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateUserMutation } = usersApiSlice; 

export default usersApiSlice;
