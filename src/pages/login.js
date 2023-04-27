import InputGroup from "@component/components/InputGroup"
import Link from "next/link"

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center bg-[#FFEEE7] py-5 w-4/6 rounded-lg">
        <h1 className="my-4 text-5xl">Signin</h1>
        <InputGroup
          placeholder="email"
          type="email"
          name="Your email"
          id="email"
        />
        <InputGroup
          placeholder="password"
          type="password"
          name="Password"
          id="password"
        />
        <button className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]">
          Signin
        </button>
        <div className="flex flex-row gap-2 my-3 text-2xl">
          <p>Don't have an account?</p>
          <Link href="/register" className="hover:text-[#7C2923] font-semibold">
            Create one
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
