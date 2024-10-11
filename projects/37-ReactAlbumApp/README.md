# album app

## html/css code

### index.html

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="#" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### index.css

```css
.center-center {
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: red;
}
```

## main code

###  main.jsx

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### App.jsx

```jsx
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <UserList />
    </>
  );
}

export default App;
```


## sotore

### index.jsx

```jsx
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
```

### AlbumsApis.jsx

```jsx
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
```

### PhotoApi.jsx

```jsx
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
```

### UserApis.jsx

```jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { nanoid } from "@reduxjs/toolkit";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query({
        providesTags: ["User"],
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: () => {
          return {
            url: "/users",
            method: "POST",
            body: {
              id: nanoid(),
              name: faker.person.fullName(),
            },
          };
        },
      }),
      removeUser: builder.mutation({
        invalidatesTags: () => {
          return [{ type: "User" }];
        },
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useAddUserMutation, useRemoveUserMutation, useFetchUserQuery } =
  userApi;

export { userApi };
```

## components

### AlbumList.jsx

```jsx
import { CircularProgress, Skeleton } from "@mui/material";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import AlbumListItem from "./AlbumListItem";

/* eslint-disable react/prop-types */
const AlbumList = ({ user }) => {
  const { data, isError, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = (
      <div>
        <h1>error</h1>
      </div>
    );
  } else {
    content = data.map((album) => {
      return <AlbumListItem album={album} key={album.id} />;
    });
  }

  const handleAlbumAdd = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="d-flex justify-content-between alert alert-primary align-content-center">
        <h3>{user.name} Albümü</h3>

        {results.isLoading ? (
          <CircularProgress />
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={handleAlbumAdd}
          >
            Albüm Ekle
          </button>
        )}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
```

### AlbumListItem.jsx

```jsx
/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { GoTrash } from "react-icons/go";
import ExpandlePanel from "./ExpandlePanel";
import PhotoList from "./PhotoList";
import { useRemoveAlbumMutation } from "../store";

const AlbumListItem = ({album}) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleDelete = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      {results.isLoading ? (
        <CircularProgress sx={{marginRight: "30px"}}/>
      ) : (
        <button
          className="btn btn-danger"
          style={{ marginRight: "30px" }}
          onClick={handleDelete}
        >
          <GoTrash />
        </button>
      )}
      {album.title}
    </>
  );

  return (
    <div>
      <ExpandlePanel header={header}>
        <PhotoList album={album} />
      </ExpandlePanel>
    </div>
  )
}

export default AlbumListItem
```

### ExpandlePanel.jsx

```jsx
import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

// eslint-disable-next-line react/prop-types
const ExpandlePanel = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container alert alert-primary">
      <div className="d-flex align-items-center alert">
        {header}
        <div className="ms-auto" onClick={handleClick}>
          {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ExpandlePanel;
```

### PhotoList.jsx

```jsx
/* eslint-disable react/prop-types */
import { CircularProgress, Skeleton } from "@mui/material";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ album }) => {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    );
  } else if (isError) {
    content = (
      <div>
        <h1>error</h1>
      </div>
    );
  } else {
    content = data.map((photo) => {
      return <PhotoListItem photo={photo} key={photo.id} />;
    });
  }

  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="d-flex justify-content-between alert alert-primary align-content-center">
        <h3>{album.title} Albümü</h3>

        {results.isLoading ? (
          <CircularProgress />
        ) : (
          <button className="btn btn-outline-primary" onClick={handlePhotoAdd}>
            Resim ekle Ekle
          </button>
        )}
      </div>
      <div className="d-flex gap-4 flex-wrap justify-content-center">{content}</div>
    </div>
  );
};

export default PhotoList;
```

### PhotoListItem.jsx

```jsx
import { CircularProgress } from "@mui/material";
import { useRemovePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";

/* eslint-disable react/prop-types */
const PhotoListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleDelete = () => {
    removePhoto(photo);
  };
  return (
    <div
      className="center-center"
      onClick={handleDelete}
      style={{ cursor: "pointer" }}
    >
      <img
        style={{ width: "300px", height: "auto" }}
        src={photo.url}
        alt="photo"
      />
      <div className="centered">
        {results.isLoading ? <CircularProgress /> : <GoTrash />}
      </div>
    </div>
  );
};

export default PhotoListItem;
```

### UserList.jsx

```jsx
import { CircularProgress, Skeleton } from "@mui/material";
import { useFetchUserQuery, useAddUserMutation } from "../store";
import UsersListItem from "./UsersListItem";


const UserList = () => {
  const { data, isError, isFetching } = useFetchUserQuery();
  const [addUser, results] = useAddUserMutation();

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = (
      <div>
        <h1>error</h1>
      </div>
    );
  } else {
    content = data.map((user) => {
      return <UsersListItem user={user} key={user.id} />;
    });
  }

  const handleUserFetch = () => {
    addUser();
  };

  return (
    <div>
      <div className="d-flex justify-content-between alert alert-primary align-content-center">
        <h3>kişi ekle</h3>

        {results.isLoading ? (
          <CircularProgress />
        ) : (
          <button className="btn btn-outline-primary" onClick={handleUserFetch}>
            kişi ekle
          </button>
        )}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default UserList;
```

### UsersListItem.jsx

```jsx
/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { useRemoveUserMutation } from "../store";
import AlbumList from "./AlbumList";
import ExpandlePanel from "./ExpandlePanel";
import { GoTrash } from "react-icons/go";

const UsersListItem = ({ user }) => {
  const [removeUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removeUser(user);
  };

  const header = (
    <>
      {results.isLoading ? (
        <CircularProgress sx={{marginRight: "30px"}}/>
      ) : (
        <button
          className="btn btn-danger"
          style={{ marginRight: "30px" }}
          onClick={handleClick}
        >
          <GoTrash />
        </button>
      )}
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandlePanel header={header}>
        <AlbumList user={user} />
      </ExpandlePanel>
    </div>
  );
};

export default UsersListItem;
```