import Image from "next/image"
import { withAuth } from "@component/utils/withAuth"
import Link from "next/link"
import { getDocs } from "firebase/firestore"
import { projectsRef } from "../../lib/firebase"
import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"
import ProjectCard from "@component/components/ProjectCard"
import knitting from "../assets/images/Knitting-pana.svg"

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
    <div className="flex flex-row p-8">
      <div className="flex flex-col w-[50vw] h-screen">
        <h1 className="text-5xl font-semibold">Your projects</h1>
        <button onClick={handleLogout} className="w-1/2 text-left ">
          Logout
        </button>

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
                <ProjectCard title={pro.title} technique={pro.technique} />
              </>
            ))
          ) : (
            <Link href="/newProject">
              <p>Add some project</p>
            </Link>
          )}
        </div>
        <Link href="/newProject">New Project </Link>
      </div>
      <div className="flex ">
        <Image
          src={knitting}
          alt="knittin ilustration"
          width={300}
          height={400}
        />
      </div>
    </div>
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
