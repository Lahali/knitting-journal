import Link from "next/link"
import Image from "next/image"
import illustration from "../assets/images/crochet-round.svg"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h1 className="lg:text-5xl md:text-5xl">
        Welcome to your project notebook!
      </h1>
      <Image
        src={illustration}
        alt="crochet ilustation"
        width={400}
        height={300}
        className="mb-4"
      />{" "}
      <a className="text-sm" href="https://storyset.com/people">
        People illustrations by Storyset
      </a>
      <div className="flex flex-row gap-2 text-2xl mt-9 md:text-4xl lg:text-4xl">
        <p className="">New around here?</p>
        <Link href="/register" className=" font-semibold hover:text-[#7C2923]">
          Create your account
        </Link>
      </div>
      <div className="flex flex-row gap-2 mt-4 text-2xl md:text-4xl lg:text-4xl">
        <p>Do you have an account?</p>
        <Link href="/login" className=" font-semibold hover:text-[#7C2923]">
          Signin
        </Link>
      </div>
    </div>
  )
}
