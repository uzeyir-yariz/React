import { useParams } from "react-router-dom"

const User = () => {

  const { id } = useParams();

  return (
    <div>
      use {id}
    </div>
  )
}

export default User
