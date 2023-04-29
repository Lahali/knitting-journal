import Link from "next/link"
import { initFirebase } from "../../firebase/firebase"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h1 className="text-5xl">Welcome to your project notebook!</h1>
      <div className="flex flex-row gap-2">
        <p>New around here?</p>
        <Link href="/register" className="font-semibold hover:text-[#7C2923]">
          Create your account
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <p>Do you have an account?</p>
        <Link href="/login" className="font-semibold hover:text-[#7C2923]">
          Signin
        </Link>
      </div>
    </div>
  )
}
