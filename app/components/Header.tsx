import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return(
    <header>
    <div className="flex flex-row text-center items-center justify-center bg-lime-100 p-5 my-6 rounded-md">
      <Link href="/">
        <Image 
          src="/images/logo.png"
          alt='Vegan Monkey Logo'
          width={150}
          height={125}
        />
      </Link>
      <p className="text-3xl font-bold pl-10">Welcome to Vegan Monkey Blog</p>
    </div>
  </header>
  )
}