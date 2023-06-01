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
      <div className="flex flex-row items-center justify-between p-6">
        <h1 className="text-4xl font-semibold lg:text-5xl">Your projects</h1>
        <button
          onClick={handleLogout}
          className="w-fit bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded  hover:bg-[#7C2923] text-2xl md:text-3xl lg:text-3xl"
        >
          <FiLogOut className="text-3xl" />
        </button>
      </div>
      <div className="flex flex-row h-screen p-8">
        <div className="flex flex-col w-screen md:w-[50vw] lg:w-[50vw]">
          <div className="flex flex-wrap max-h-screen overflow-auto">
            {filteredProjects && currentUser ? (
              filteredProjects.map((pro) => (
                <>
                  {/* <div
                  onClick={() => router.push(`/project/${pro.id}`)}
                  className="p-3 border border-[#D9D9D9] bg-[#D9D9D9] w-fit m-4 cursor-pointer"
                  key={pro.id}
                >
                  <p>Title: {pro.title}</p>
                  <p>Technique: {pro.technique}</p>
                  <p>Yarn: {pro.yarn}</p>
                  <p>Needles: {pro.needles}</p>
                </div> */}
                  <ProjectCard
                    title={pro.title}
                    technique={pro.technique}
                    id={pro.id}
                  />
                </>
              ))
            ) : (
              <Link href="/newProject">
                <p>Add some project</p>
              </Link>
            )}
          </div>
          <Link href="/newProject">
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

export default MyProjects

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
