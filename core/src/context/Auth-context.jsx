import React from "react"

const AuthContext = React.createContext({statusLogin: null, login: () => {}})

export default AuthContext;