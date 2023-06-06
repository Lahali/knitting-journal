import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { currentUser, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!currentUser && !loading) {
        router.replace("/login")
      }
    }, [currentUser, loading, router])

    if (loading) {
      // Puedes mostrar un indicador de carga mientras se verifica la autenticación
      return <div>Loading...</div>
    }

    if (!currentUser) {
      // Puedes redirigir al usuario a la página de inicio de sesión si no está autenticado
      return null
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
