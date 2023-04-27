import { useForm } from "react-hook-form"
import InputGroup from "@component/components/InputGroup"
import SelectGroup from "@component/components/SelectGroup"

// TODO - lo hacemos modal??
const Newproject = () => {
  const { handleSubmit, register } = useForm()
  const onSubmit = (data) => console.log("data", data)

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center bg-[#FFEEE7] py-5 w-4/6 rounded-lg"
      >
        <h1 className="my-4 text-5xl">New Project</h1>
        {/* ==> TITLE INPUT */}
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="title">Name your project</label>
          <input
            placeholder="title"
            type="text"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("title")}
          />
        </div>
        {/* ==> SELECT INPUT */}
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="technique">Choose your technique</label>
          <select
            id="technique"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("technique")}
          >
            <option value="none">Choose an option</option>
            <option value="crochet">Crochet</option>
            <option value="knit">Knit</option>
          </select>
        </div>
        {/* ==> YARN INPUT  */}
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="yarn">Which yarn are you using?</label>
          <input
            placeholder="Yarn"
            type="text"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("yarn")}
          />
        </div>
        {/* ==> NEEDLES INPUT */}
        <div className="flex flex-col w-4/6 gap-1 my-5">
          <label htmlFor="needles">Which needles are you using?</label>
          <input
            placeholder="Needles"
            type="text"
            className="bg-[#D9D9D9] p-3 rounded"
            {...register("needles")}
          />
        </div>
        <button
          type="submit"
          className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-4/6 hover:bg-[#7C2923]"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default Newproject
