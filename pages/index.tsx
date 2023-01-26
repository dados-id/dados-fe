import Head from "next/head"
import { Header, Body, Button, Toast, Chip, SearchBar } from "@components"
import { HomeIcon } from "@heroicons/react/24/outline"
export default function Home() {
    const successToast = Toast({
        preset: "success",
        message: "Success",
    })
    const errorToast = Toast({
        preset: "error",
        message: "Error",
    })
    const warningToast = Toast({
        preset: "warning",
        message: "Warning",
    })
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header preset="h1">tes</Header>
            <Body preset="p1" className="">
                hello lorem ipsum
            </Body>

            <Button preset="primary" onClick={() => errorToast()}>
                error toast
            </Button>
            <Button preset="primary" onClick={() => successToast()}>
                success toast
            </Button>
            <Button preset="primary" onClick={() => warningToast()}>
                warning toast
            </Button>
            <Chip icon={HomeIcon} />
            <br></br>
            <Chip icon={HomeIcon}>hello</Chip>
            <div className="items-center justify-center flex">
            <SearchBar/>

            </div>
        </>
    )
}
