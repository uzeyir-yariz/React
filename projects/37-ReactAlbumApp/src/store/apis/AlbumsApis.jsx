import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "UserAlbums", id: album.id };
          });
          tags.push({ type: "UserAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "GET",
            params: {
              userId: user.id,
            },
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UserAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              id: nanoid(),
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "UserAlbums", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
} = albumsApi;

export { albumsApi };
