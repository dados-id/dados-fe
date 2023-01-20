import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Navbar, Footer } from "@components"
import { theme } from "../styles/theme"
import { AuthContextProvider } from "context/AuthContext"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AuthContextProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </AuthContextProvider>
        </ChakraProvider>
    )
}
