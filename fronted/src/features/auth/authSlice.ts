import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authSlice = createApi({
  reducerPath: "api", 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5498/api' }),
  tagTypes: ["Users"], 
  endpoints: (builder) => ({}) 
});

export default authSlice;
