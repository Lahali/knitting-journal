import React from "react"
import { withAuth } from "@component/utils/withAuth"
import Link from "next/link"

const myProjects = () => {
  return (
    <div>
      <h1> myProjects </h1>
      <Link href="/newProject">New Project </Link>
    </div>
  )
}

export default withAuth(myProjects)
