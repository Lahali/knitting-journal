import InputGroup from "@component/components/InputGroup"
import Link from "next/link"
import { useForm } from "react-hook-form"

const Register = () => {
  const { register } = useForm()
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center bg-[#FFEEE7] py-5 w-4/6 rounded-lg">
        <h1 className="my-4 text-5xl">Register</h1>
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="name">Write your name</label>
          <input
            placeholder="Name"
            type="text"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="email">Write your email</label>
          <input
            placeholder="Email"
            type="email"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="password">Write your password</label>
          <input
            placeholder="Password"
            type="password"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("password")}
          />
        </div>
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="passwordValidation">Repeat your password</label>
          <input
            placeholder="Repeat password"
            type="password"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("passwordValidation")}
          />
        </div>
        <button className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]">
          Submit
        </button>
        <div className="flex flex-row gap-2 my-3 text-2xl">
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
