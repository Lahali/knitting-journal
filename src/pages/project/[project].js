import { doc, getDoc, updateDoc } from "firebase/firestore"
import React, { useState } from "react"
import { dataBase, projectsRef } from "../../../lib/firebase"
import { useRouter } from "next/router"

const Project = ({ singleProject }) => {
  const { query } = useRouter()
  const [counter, setCounter] = useState(0)

  console.log("query", query.project)

  const handleIncrease = async () => {
    if (query.project) {
      const projectDocRef = doc(dataBase, "projects", query.project)
      await updateDoc(projectDocRef, { counter: counter + 1 })
      setCounter(counter + 1)
    }
  }

  const handleDecrease = async () => {
    if (query.project && counter > 0) {
      const projectDocRef = doc(dataBase, "projects", query.project)
      await updateDoc(projectDocRef, { counter: counter - 1 })
      setCounter(counter - 1)
    }
  }

  return (
    <div className="p-5">
      <p>{singleProject.title}</p>
      <p>{singleProject.technique}</p>
      <p>{singleProject.yarn}</p>
      <p>{singleProject.needles}</p>
      <p>{singleProject.notes}</p>
      <div className="flex flex-col">
        <h1 className="text-5xl">{counter}</h1>
        <button
          onClick={handleIncrease}
          type="button"
          name="increase"
          className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-1/2 hover:bg-[#7C2923]"
        >
          +
        </button>
        <button
          onClick={handleDecrease}
          type="button"
          name="decrease"
          className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-1/2 hover:bg-[#7C2923]"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Project

export async function getServerSideProps({ query: { project } }) {
  const docRef = doc(dataBase, "projects", project)
  const docSnap = await getDoc(docRef)
  const singleProject = docSnap.data()

  return {
    props: {
      singleProject: singleProject,
    },
  }
}
