import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import React from "react"
import { FiLogOut } from "react-icons/fi"
import { GiYarn } from "react-icons/gi"

const Navbar = ({ children }) => {
  const { logout } = useAuth()
  const router = useRouter()
  const handleLogout = async () => {
    await logout()
    router.push("/")
  }
  return (
    <div className="z-10 fixed flex-row flex top-0 w-full items-center justify-between p-6 bg-[#A3342C] text-[#FFEEE7]">
      <p>
        <GiYarn className="text-6xl" />
      </p>
      <p>{children}</p>
      <button
        onClick={handleLogout}
        className="w-fit bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded  hover:bg-[#7C2923] text-2xl md:text-3xl lg:text-3xl"
      >
        <FiLogOut className="text-4xl" />
      </button>
    </div>
  )
}

export default Navbar
