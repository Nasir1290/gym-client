import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (data) =>{
        return {
            url:'/create-user',
            method:"POST",
            body: data,
        }

      },
    }),
    loginUser: build.mutation({
      query: (args) =>{
        return {
            url:'/login-user',
            method:"POST",
            body: args.data,
        }

      },

    }),
  }),

});

export const {useRegisterUserMutation,useLoginUserMutation} = authApi;
