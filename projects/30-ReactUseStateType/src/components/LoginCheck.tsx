import { useState } from "react"
import { PersonType }   from "../typeOf/propsType"

const LoginCheck = () => {

  const [user, setUser] = useState<null | PersonType>(null);

  const handleClickLogin = () => {
    setUser({
      firstName: "Azura",
      lastName: "Krya",
      age: 25,
      isLogin: true
    })
  }
  
  const handleClickLogout = () => {
    setUser(null);
  }

  return (
    <div>
      <button onClick={handleClickLogin}>giriş yap</button>    
      <button onClick={handleClickLogout}>çıkış yap</button>
      {
        user?.isLogin ? (
          <div>kullanıcı giriş yaptı</div>
        ) : (
          <div>kullanıcı giriş yapmadı</div>
        )
      }
      <div>
        <p> {user?.firstName} </p>
        <p> {user?.lastName} </p>
        <p> {user?.age} </p>
      </div>
    </div>
  )
}

export default LoginCheck
