import Image from "next/image"
import { withAuth } from "@component/utils/withAuth"
import Link from "next/link"
import { getDocs } from "firebase/firestore"
import { projectsRef } from "../../lib/firebase"
import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import ProjectCard from "@component/components/ProjectCard"
import knitting from "../assets/images/Knitting-pana.svg"
import { HiOutlinePlus } from "react-icons/hi"
import { FiLogOut } from "react-icons/fi"

const MyProjects = ({ projects }) => {
  const { currentUser, logout } = useAuth()
  const router = useRouter()
  const filteredProjects = currentUser
    ? projects.filter((pro) => pro.userId === currentUser.uid)
    : []

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between p-6 ">
        <h1 className="text-4xl font-semibold lg:text-5xl">Your projects</h1>
        <button
          onClick={handleLogout}
          className="w-fit bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded  hover:bg-[#7C2923] text-2xl md:text-3xl lg:text-3xl"
        >
          <FiLogOut className="text-3xl" />
        </button>
      </div>
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
        <div className="hidden md:flex lg:flex flex-col items-center justify-center w-[50vw]">
          <Image
            src={knitting}
            alt="knittin ilustration"
            width={300}
            height={400}
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
