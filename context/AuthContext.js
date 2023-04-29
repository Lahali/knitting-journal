import React, { createContext, useContext } from "react"

// create context with default value as empty object
const AuthContext = createContext({})

// define provider component
export const AuthContextProvider = ({ children }) => {
  // return provider with AuthContext as value
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

// define hook to consume AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}
