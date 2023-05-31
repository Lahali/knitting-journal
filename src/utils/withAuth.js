import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export const withAuth = (WrappedComponent) => {
  const Wrapper = () => {
    const router = useRouter()
    const { currentUser } = useAuth()

    useEffect(() => {
      if (!currentUser) {
        router.replace("/login")
      }
    }, [currentUser, router])

    return currentUser ? <WrappedComponent /> : null
  }
  return Wrapper
}
