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
