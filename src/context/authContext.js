import React, { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../../lib/firebase"

// create context with default value as empty object
const AuthContext = createContext()

// define provider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsusbscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsusbscribe()
  }, [])

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  // return provider with AuthContext as value
  return (
    <AuthContext.Provider value={{ signup, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// define hook to consume AuthContext
export const useAuth = () => {
  return useContext(AuthContext)
}
