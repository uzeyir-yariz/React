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
