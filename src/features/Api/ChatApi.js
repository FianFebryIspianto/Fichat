import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5002/chat/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("token", token);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => "",
    }),
    getMessages: builder.query({
      query: (chatId) => `messages/${chatId}`,
    }),
    sendMessage: builder.mutation({
      query: (body) => ({
        url: "sendMessage",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery, useSendMessageMutation } =
  chatApi;
