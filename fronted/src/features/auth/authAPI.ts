// import apiSlice from "./authSlice";
// import { User } from "./authTypes";
// const usersApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllUsers: builder.query<User[], void>({
//         query: () => "/users", 
//       providesTags: ["Users"], 
//     }),
//     createUser: builder.mutation({
//       query: (newUser) => ({
//         url: "/users", 
//         method: "POST",
//         body: newUser, 
//       }),
//       invalidatesTags: ["Users"], 
//     }),
//   }),
// });

// export const { useGetAllUsersQuery, useCreateUserMutation } = usersApiSlice; 

// export default usersApiSlice;


import apiSlice from "./authSlice"; // אם apiSlice מוגדר בקובץ אחר
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

    // הוספת ה-endpoint עבור ה-signIn (כנראה תשלח פרטי התחברות)
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signin", // הנתיב המתאים ל-signin שלך
        method: "POST",
        body: credentials, // למשל { email, password }
      }),
    }),
  }),
});

// מייצאים את ה-hooks שנוצרים מה-endpoints
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useSignInMutation,  // מייצאים את הפונקציה הזו
} = usersApiSlice;

export default usersApiSlice;
