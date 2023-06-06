import Link from "next/link"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext"
import { useRouter } from "next/router"

const Register = () => {
  const { signup } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const handleSignup = handleSubmit(async (data) => {
    try {
      if (!data.name || !data.email || !data.password) {
        return
      }
      await signup(data.email, data.password, data.name)
      console.log(data)
      router.push("/myProjects")
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center bg-[#FFEEE7] py-5 w-4/6 rounded-lg"
        onSubmit={handleSignup}
      >
        <h1 className="my-4 md:text-5xl lg:text-5xl">Register</h1>
        <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
          <label htmlFor="name">Write your name</label>
          <input
            placeholder="Name"
            type="text"
            className={`bg-[#D9D9D9] p-3 rounded border ${
              errors.email ? "border-red-500" : "border-[#D9D9D9]"
            }`}
            error={errors.name && "true"}
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
        </div>
        <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
          <label htmlFor="email">Write your email</label>
          <input
            placeholder="Email"
            type="email"
            className={`bg-[#D9D9D9] p-3 rounded border ${
              errors.email ? "border-red-500" : "border-[#D9D9D9]"
            }`}
            error={errors.email && "true"}
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
          <label htmlFor="password">Write your password</label>
          <input
            placeholder="Password"
            type="password"
            className={`bg-[#D9D9D9] p-3 rounded border ${
              errors.email ? "border-red-500" : "border-[#D9D9D9]"
            }`}
            error={errors.password && "true"}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>

        <button
          className="bg-[#A3342C] text-2xl md:text-3xl lg:text-3xl text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]"
          type="submit"
        >
          Submit
        </button>

        <div className="flex flex-row gap-2 my-3 text-xl md:text-2xl lg:text-2xl">
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
