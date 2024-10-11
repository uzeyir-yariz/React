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
