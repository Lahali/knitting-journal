import Image from "next/image"
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore"
import React, { useState } from "react"
import { dataBase, app } from "../../../lib/firebase"
import { useRouter } from "next/router"
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi"
import crochetIlustration from "../../assets/images/Crochet-pana.svg"
import Modal from "@component/components/Modal"

const Project = ({ singleProject }) => {
  const { query } = useRouter()
  const [counter, setCounter] = useState(0)
  const router = useRouter()
  // ==> MODAL ACTION
  const [openModal, setOpenModal] = useState(false)

  // ==> DELETE
  const deleteProject = async () => {
    const { project } = query
    const projectDocRef = doc(getFirestore(), "projects", project)
    await deleteDoc(projectDocRef)
    console.log("mirando", project)
    router.push("/myProjects")
  }

  // ==> COUNTER
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
    <div className="flex flex-row items-center justify-between h-screen p-5">
      <Modal
        isOpenModal={openModal}
        closeModal={() => setOpenModal(false)}
        deleteProject={deleteProject}
      />
      <div className="hidden p-10 bg-[#FFEEE7] lg:flex md:flex rounded-full w-fit flex-col  border-[#A5C08B] border-solid border-8">
        <Image
          src={crochetIlustration}
          alt="crochet ilustration"
          width={400}
          height={400}
          className="m-10"
        />
        <a className="text-sm text-center" href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </div>
      <div className="flex flex-col bg-[#F1D3CC] p-10 rounded-md max-w-[400px] border-solid border-[#A3342C] border-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center bg-[#FFEEE7] p-20 rounded-full  w-[80px] h-[80px] my-4">
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
          <button
            onClick={deleteProject}
            className="bg-[#A3342C] text-[#FFEEE7] p-3 mt-5 rounded w-full  hover:bg-[#7C2923] text-3xl"
          >
            Delete
          </button>
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
