import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "@components";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
