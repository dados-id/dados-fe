import Link from "next/link"
import { Header, Body, Button } from "@components"
import { useState } from "react"
import LoginButton from "./LoginButton"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Desktop */}
            <div className="mobile:hidden tablet:flex h-16 w-full shadow-md bg-white text-mariana flex-row items-center justify-between px-32">
                {/* Logo */}
                <div className="flex flex-row gap-10">
                    <Link href="/">
                        <img src="logo.svg"/>
                    </Link>
                    
                    {/* Nav */}
                    <nav className="flex flex-row items-center justify-center gap-8">
                        <Header preset="h5">
                            <Link href="/howto">How to Rate</Link>
                        </Header>
                        <Header preset="h5">
                            <Link href="/faq">FAQ</Link>
                        </Header>
                        <Header preset="h5">
                            <Link href="/about">About Us</Link>
                        </Header>
                    </nav>
                </div>

                {/* User */}
                <div>
                    <LoginButton user={{name: "ste"}}/>
                </div>
            </div>
            {/* Mobile */}
            <div className="mobile:flex tablet:hidden w-full text-mariana flex-col shadow-md">
                <div className="bg-white h-16 w-full flex flex-row items-center justify-between px-8">
                    {/* Logo */}
                    <Link href="/">
                        <img src="logo.svg"/>
                    </Link>
                    {/* User */}
                    <div>
                        <Button
                            preset="primary"
                            className="flex flex-row"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </Button>
                    </div>
                </div>
                <div
                    className={`${menuOpen ? "h-0 opacity-0" : "opacity-100 py-4"
                        }
           transition-height ease-in-out duration-500 px-8 bg-white`}
                >
                    <nav className="flex flex-col gap-8">
                        <Header preset="h5">
                            <Link href="/howto">How to Rate</Link>
                        </Header>
                        <Header preset="h5">
                            <Link href="/faq">FAQ</Link>
                        </Header>
                        <Header preset="h5">
                            <Link href="/about">About Us</Link>
                        </Header>
                    </nav>
                    {/* User */}
                    <div className="flex justify-end">
                        <LoginButton user={{name: "ste"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}
