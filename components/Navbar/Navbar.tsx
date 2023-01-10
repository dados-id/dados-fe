import Link from "next/link";

export const Navbar = () => {
  return(
    <div className="h-16 w-full bg-slate-400 flex flex-row items-center justify-around">
      {/* Logo */}
      <div>
        <div>dados</div>
      </div>
      {/* Nav */}
      <nav className="flex flex-row gap-6">
        <Link href="/howto">How to Rate</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/about">About Us</Link>
      </nav>
      {/* User */}
      <div>

      </div>
    </div>
  )
}
