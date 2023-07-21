import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div className="flex border-t border-slate-500 mt-6 py-6 text-xl justify-center align-middle gap-32">
        <div className="flex text-slate-400">
          <h3>By &nbsp;</h3>
          <Link href="https://veganmonkey.co/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-700">Vegan Monkey</Link>
        </div>
        <div> 
          <Link href="https://www.instagram.com/veganmonkey.co/" target="_blank" rel="noopener noreferrer" className="text-black/30 hover:text-red-400 text-3xl">
            <FaInstagram />
          </Link>
        </div>
      </div>
      
    </footer>
  )
}