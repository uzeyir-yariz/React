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
