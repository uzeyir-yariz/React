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
