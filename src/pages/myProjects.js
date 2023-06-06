import Image from "next/image"
import Link from "next/link"
import { withAuth } from "@component/utils/withAuth"
import { getDocs } from "firebase/firestore"
import { projectsRef } from "../../lib/firebase"
import { useAuth } from "@component/context/authContext"
import ProjectCard from "@component/components/ProjectCard"
import Navbar from "@component/components/Navbar"
import knitting from "../assets/images/Knitting-pana.svg"
import { HiOutlinePlus } from "react-icons/hi"

const MyProjects = ({ projects }) => {
  const { currentUser } = useAuth()

  const filteredProjects = currentUser
    ? projects.filter((pro) => pro.userId === currentUser.uid)
    : []

  return (
    <>
      <Navbar>Your projects</Navbar>
      <div className="flex flex-row max-h-screen p-8 ">
        <div className="relative flex flex-col w-screen md:w-[50vw] lg:w-[50vw]">
          <div className="flex flex-wrap max-h-[530px] lg:max-h-screen md:max-h-screen overflow-auto">
            {filteredProjects && currentUser ? (
              filteredProjects.map((pro) => (
                <div key={pro.id}>
                  <ProjectCard
                    title={pro.title}
                    technique={pro.technique}
                    id={pro.id}
                  />
                </div>
              ))
            ) : (
              <Link href="/newProject">
                <p>Add some project</p>
              </Link>
            )}
          </div>
          <Link
            href="/newProject"
            className="bg-[#A3342C] text-[#FFEEE7] p-3 w-fit rounded-md ml-3 sticky"
          >
            <HiOutlinePlus />
          </Link>
        </div>
        <div className="hidden md:flex lg:flex flex-col items-center justify-center w-[50vw] ">
          <Image
            className="bg-[#F1D3CC] m-3 rounded-lg "
            src={knitting}
            alt="knittin ilustration"
            width={400}
            height={500}
          />
          <a className="text-sm" href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
        </div>
      </div>
    </>
  )
}

export default withAuth(MyProjects)

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(projectsRef)
  const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  console.log("docs", docs)
  return {
    props: {
      projects: docs,
    },
  }
}
