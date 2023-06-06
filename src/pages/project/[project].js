import { doc, getDoc, updateDoc } from "firebase/firestore"
import React, { useState } from "react"
import { dataBase } from "../../../lib/firebase"
import { useRouter } from "next/router"
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi"

import Image from "next/image"

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
    <div className="flex flex-row p-5 max-w-[400px]">
      <div className="flex flex-col bg-[#F1D3CC] p-6 rounded-md">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center bg-[#FFEEE7] p-10 rounded-full  w-[80px] h-[80px] my-4">
            <h1 className="text-5xl">
              {singleProject.counter > 0 ? singleProject.counter : counter}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <button
              onClick={handleIncrease}
              type="button"
              name="increase"
              className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-fit hover:bg-[#7C2923] m-4"
            >
              <HiOutlinePlus />
            </button>
            <button
              onClick={handleDecrease}
              type="button"
              name="decrease"
              className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-fit hover:bg-[#7C2923] m-4"
            >
              <HiOutlineMinus />
            </button>
          </div>
        </div>
        <div className="m-5">
          <p className="my-5 font-bold text-center uppercase">
            {singleProject.title}
          </p>
          <p>
            <span className="font-bold">Technique:</span>{" "}
            {singleProject.technique}
          </p>
          <p>
            <span className="font-bold">Yarn:</span> {singleProject.yarn}
          </p>
          <p>
            <span className="font-bold">Needles:</span> {singleProject.needles}
          </p>
          <p>
            <span className="font-bold">Notes:</span> {singleProject.notes}
          </p>
        </div>
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
