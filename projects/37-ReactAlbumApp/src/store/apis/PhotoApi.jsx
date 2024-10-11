import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, photo) => {
          const tags = result.map((photo) => {
            return { type: "AlbumPhoto", id: photo.id };
          });
          tags.push({ type: "AlbumPhoto", id: photo.id });
          return tags;
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "GET",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              id: nanoid(),
              albumId: album.id,
              url: faker.image.urlPicsumPhotos({
                width: 128,
                height: 128,
                grayscale: true,
                blur: 0,
              }),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "AlbumPhoto", id: photo.id }];
        },
        query: (photo) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useAddPhotoMutation,
  useRemovePhotoMutation,
  useFetchPhotosQuery,
} = photosApi;

export { photosApi };
