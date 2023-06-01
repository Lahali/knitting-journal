import React from "react"
import { withAuth } from "@component/utils/withAuth"
import Link from "next/link"
import { getDocs } from "firebase/firestore"
import { projectsRef } from "../../lib/firebase"
import { useAuth } from "@component/context/authContext"
import { useRouter } from "next/router"

const MyProjects = ({ projects }) => {
  const { currentUser } = useAuth()
  const router = useRouter()
  const filteredProjects = currentUser
    ? projects.filter((pro) => pro.userId === currentUser.uid)
    : []
  console.log(filteredProjects)

  return (
    <div>
      <h1> myProjects </h1>
      <Link href="/newProject">New Project </Link>
      <div className="flex flex-wrap">
        {filteredProjects && currentUser ? (
          filteredProjects.map((pro) => (
            <div
              onClick={() => router.push(`/project/${pro.id}`)}
              className="p-3 border border-[#D9D9D9] bg-[#D9D9D9] w-fit m-4 cursor-pointer"
              key={pro.id}
            >
              <p>Title: {pro.title}</p>
              <p>Technique: {pro.technique}</p>
              <p>Yarn: {pro.yarn}</p>
              <p>Needles: {pro.needles}</p>
            </div>
          ))
        ) : (
          <Link href="/newProject">
            <p>Add some project</p>
          </Link>
        )}
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
