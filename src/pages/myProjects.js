import React from "react"
import { withAuth } from "@component/utils/withAuth"
import Link from "next/link"
import { getDocs } from "firebase/firestore"
import { projectsRef } from "../../lib/firebase"

const MyProjects = ({ projects }) => {
  console.log("projects", projects)
  return (
    <div>
      <h1> myProjects </h1>
      <Link href="/newProject">New Project </Link>
      {projects ? (
        projects.map((pro) => (
          <div
            className="p-3 border border-[#D9D9D9] bg-[#D9D9D9] w-fit m-4"
            key={pro.id}
          >
            <p>Title: {pro.title}</p>
            <p>Technique: {pro.technique}</p>
            <p>Yarn: {pro.yarn}</p>
            <p>Needles: {pro.needles}</p>
          </div>
        ))
      ) : (
        <p>Add some project</p>
      )}
    </div>
  )
}

export default MyProjects

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(projectsRef)
  const docs = []
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id })
  })
  console.log("docs", docs)
  return {
    props: {
      projects: docs,
    },
  }
}
