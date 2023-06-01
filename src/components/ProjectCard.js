import React from "react"
import { useRouter } from "next/router"

const ProjectCard = ({ title, technique, id }) => {
  const router = useRouter()
  return (
    <div
      key={id}
      onClick={() => router.push(`/project/${id}`)}
      className="p-6 border border-[#FFEEE7] bg-[#FFEEE7] h-fit min-w-[126px] md:min-w-[185px] lg:min-w-[185px] m-4 cursor-pointer rounded-md"
    >
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{technique}</p>
    </div>
  )
}

export default ProjectCard
