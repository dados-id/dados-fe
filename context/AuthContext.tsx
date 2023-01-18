import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"
import {
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import { auth } from "config/firebase"

type AuthContextValue = {
    user: any
    token: string
    googleSignIn: () => void
    logout: () => void
}

const AuthContext = createContext({} as AuthContextValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [token, setToken] = useState<string>("")

    const googleSignIn = async () => {
        setLoading(false)
        setError("")

        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
            // toast.success("Login berhasil!")
        } catch (error: any) {
            setError(error)
            // if (error?.code === "auth/account-exists-with-different-credential")
            //     toast.error(
            //         "Akun sudah teregistrasi, silahkan login menggunakan platform lain."
            //     )
            // else if (error?.code === "auth/cancelled-popup-request") {
            // } else {
            //     toast.error(`Terjadi error saat login [${error?.code}]`)
            // }
        } finally {
            // setLoading(true)
        }
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const current = auth.currentUser
                if (current != null) {
                    current
                        .getIdToken(true)
                        .then(function (idToken) {
                            // Send token to your backend via HTTPS
                            sessionStorage.setItem("idToken", idToken) // store token in session
                            // axios
                            //     .get(`${process.env.NEXT_PUBLIC_API_URL}/user/`, {
                            //         headers: {
                            //             Authorization: `Bearer ${idToken}`,
                            //         },
                            //     })
                            //     .then((res) => {
                            //         console.log(res)
                            //     })
                            //     .catch((err) => {
                            //         console.log(err)
                            //     })
                            setToken(idToken)
                        })
                        .catch(function (error) {
                            // Handle error
                            // toast.error("Something went wrong. Try Again.")
                        })
                }

                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
                // setUser(user)
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    // const signup = (email: string, password: string) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    // const login = (email: string, password: string) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    // }

    const logout = async () => {
        setUser(null)
        setToken("")
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, logout, googleSignIn, token }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
