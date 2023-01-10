import Link from "next/link";
import { Header, Body, Button } from "@components"

export const Navbar = () => {
  return(
    <div className="h-16 w-full bg-whipcream text-mariana flex flex-row items-center justify-around">
      {/* Logo */}
      <div>
        <Header preset="h5" >dados</Header>
      </div>
      {/* Nav */}
      <nav className="flex flex-row gap-8">
        <Header preset="h5"><Link href="/howto">How to Rate</Link></Header>
        <Header preset="h5"><Link href="/faq">FAQ</Link></Header>
        <Header preset="h5"><Link href="/about">About Us</Link></Header>
      </nav>
      {/* User */}
      <div>
        <Button 
          preset="primary" 
          className="flex flex-row"
          rightIcon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

        }
          >
            Login

        </Button>
      </div>
    </div>
  )
}
