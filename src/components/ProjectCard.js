import React from "react"

const ProjectCard = ({ title, technique }) => {
  return (
    <div className="p-4 border border-[#D9D9D9] bg-[#D9D9D9] h-fit min-w-[185px] m-4 cursor-pointer rounded-md">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{technique}</p>
    </div>
  )
}

export default ProjectCard
