import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./apis/UserApis";
import { albumsApi } from "./apis/AlbumsApis";
import { photosApi } from "./apis/PhotoApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMidleware) => {
    return getDefaultMidleware()
      .concat(userApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useAddUserMutation,
  useFetchUserQuery,
  useRemoveUserMutation,
} from "./apis/UserApis";

export {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
} from "./apis/AlbumsApis";

export {
  useAddPhotoMutation,
  useRemovePhotoMutation,
  useFetchPhotosQuery
} from "./apis/PhotoApi";

