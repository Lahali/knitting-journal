import { useForm } from "react-hook-form"
import { projectsRef } from "../../lib/firebase"
import { withAuth } from "@component/utils/withAuth"
import { addDoc } from "firebase/firestore"
import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import Navbar from "@component/components/Navbar"

// TODO - lo hacemos modal??
const Newproject = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm()

  const { currentUser } = useAuth()
  const router = useRouter()

  const onSubmitProject = handleSubmit(async (data) => {
    try {
      if (!data.title || !data.technique || !data.yarn || !data.needles) {
        return
      }
      await addDoc(projectsRef, {
        ...data,
        userId: currentUser.uid,
      })
      router.push("/myProjects")
      reset()
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen mb-5 overflow-auto">
        <Navbar>New project</Navbar>
        <form
          onSubmit={handleSubmit(onSubmitProject)}
          className="absolute top-40 flex flex-col items-center justify-center w-5/6  bg-[#FFEEE7] lg:py-5 md:py-5 lg:w-4/6 md:w-4/6 rounded-lg"
        >
          <h1 className="my-4 text-4xl font-bold lg:text-5xl md:text-5xl">
            New Project
          </h1>
          {/* ==> TITLE INPUT */}
          <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
            <label htmlFor="title">Name your project</label>
            <input
              placeholder="title"
              type="text"
              className={`bg-[#D9D9D9] p-3 rounded border ${
                errors.email ? "border-red-500" : "border-[#D9D9D9]"
              }`}
              error={errors.title && "true"}
              {...register("title", { required: true })}
            />
            {errors.title && <p className="text-red-500">Title is required</p>}
          </div>
          {/* ==> SELECT INPUT */}
          <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
            <label htmlFor="technique">Choose your technique</label>
            <select
              id="technique"
              className={`bg-[#D9D9D9] p-3 rounded border ${
                errors.technique ? "border-red-500" : "border-[#D9D9D9]"
              }`}
              error={errors.technique && "true"}
              {...register("technique", { required: true })}
            >
              <option value="none">Choose an option</option>
              <option value="crochet">Crochet</option>
              <option value="knit">Knit</option>
            </select>
            {errors.technique && (
              <p className="text-red-500">Technique is required</p>
            )}
          </div>
          {/* ==> YARN INPUT  */}
          <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
            <label htmlFor="yarn">Which yarn are you using?</label>
            <input
              placeholder="Yarn"
              type="text"
              className={`bg-[#D9D9D9] p-3 rounded border ${
                errors.yarn ? "border-red-500" : "border-[#D9D9D9]"
              }`}
              error={errors.yarn && "true"}
              {...register("yarn", { required: true })}
            />
            {errors.yarn && <p className="text-red-500">Yarn is required</p>}
          </div>
          {/* ==> NEEDLES INPUT */}
          <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
            <label htmlFor="needles">Which needles are you using?</label>
            <input
              placeholder="Needles"
              type="text"
              className={`bg-[#D9D9D9] p-3 rounded border ${
                errors.needles ? "border-red-500" : "border-[#D9D9D9]"
              }`}
              error={errors.needles && "true"}
              {...register("needles", { required: true })}
            />
            {errors.needles && (
              <p className="text-red-500">Needles is required</p>
            )}
          </div>
          {/* ==> NOTES TEXTAREA */}
          <div className="flex flex-col w-4/6 gap-1 my-5 text-2xl lg:text-3xl md:text-3xl">
            <label htmlFor="notes">Add some notes</label>
            <textarea
              placeholder="notes"
              rows="4"
              className={`bg-[#D9D9D9] p-3 rounded border ${
                errors.notes ? "border-red-500" : "border-[#D9D9D9]"
              }`}
              error={errors.notes && "true"}
              {...register("notes")}
            />
            {errors.notes && (
              <p className="text-red-500">Something went wrong</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]"
          >
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default withAuth(Newproject)
