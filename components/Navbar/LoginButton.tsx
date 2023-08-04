import { Button } from "@components"
import { useAuthContext } from "@context"

// interface userProps {}

const LoginButton = ({ user }: any) => {
    const { googleSignIn } = useAuthContext()
    return (
        <>
            {user.firstName ? (
                <Button
                    preset="secondary"
                    className="flex flex-row"
                    rightIcon={
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    }
                >
                    Hi, {user.firstName}
                </Button>
            ) : (
                <Button
                    preset="primary"
                    className="flex flex-row"
                    rightIcon={
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    }
                    onClick={() => googleSignIn()}
                >
                    Login
                </Button>
            )}
        </>
    )
}

export default LoginButton
