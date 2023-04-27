import InputGroup from "@component/components/InputGroup"
import Link from "next/link"

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center justify-center bg-[#FFEEE7] py-5 w-4/6 rounded-lg">
        <h1 className="text-5xl my-4">Register</h1>
        <InputGroup placeholder="name" type="text" name="Name" />
        <InputGroup placeholder="email" type="email" name="Email" />
        <InputGroup placeholder="password" type="password" name="Password" />
        <button className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]">
          Submit
        </button>
        <div className="flex flex-row gap-2 text-2xl my-3">
          <p>Do you have an account?</p>
          <Link href="/login" className="hover:text-[#7C2923] font-semibold">
            Signin
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
