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
