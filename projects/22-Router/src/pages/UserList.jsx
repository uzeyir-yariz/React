import { Link, Outlet } from "react-router-dom"

const UserList = () => {
  return (
    <div>
      <h2 className="subtitle">kullanıcılar</h2>
      <ul>
        <li><Link to="user/1">user 1</Link></li>
        <li><Link to="user/2">user 2</Link></li>
        <li><Link to="user/3">user 3</Link></li>
      </ul>
      <br />
      <Outlet/>
    </div>
  )
}

export default UserList
