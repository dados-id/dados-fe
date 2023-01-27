import { Button } from "@components"

interface userProps {
    user: {
        name: string;
    }
}

const LoginButton = ({ user }: userProps) => {
    return (
        <>
            {user.name ?
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
                    Hi, {user.name}
                </Button>
                :
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
                >
                    Login
                </Button>
            }

        </>
    )
}

export default LoginButton;