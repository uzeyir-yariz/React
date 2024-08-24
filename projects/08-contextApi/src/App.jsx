import "bulma/css/bulma.css"
import AuthContext from "./context/Auth-context"
import { useState } from "react"
import Auth from "./components/Auth"

function App() {

  const [loginAuthStatus, setLoginAuthStatus] = useState(false)

  const loginAuth = () => {
    setLoginAuthStatus(!loginAuthStatus);
  }

  return (
    <AuthContext.Provider value={{statusLogin: loginAuthStatus, login: loginAuth}} >
      <Auth />
    </AuthContext.Provider>
  )
}

export default App
