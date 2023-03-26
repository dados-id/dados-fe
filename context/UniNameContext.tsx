import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
} from "react"
import { useUniversity } from "@hooks"

const UniNameContext = createContext<string>("")
const SetUniNameContext = createContext<Dispatch<SetStateAction<string>>>(
    (value) => {
        console.log("Default function:", value)
    }
)

export function useUniNameContext() {
    return useContext(UniNameContext)
}

export function useSetUniNameContext() {
    return useContext(SetUniNameContext)
}

export function UniNameContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [uniName, setUniName] = useUniversity()
    return (
        <UniNameContext.Provider value={uniName}>
            <SetUniNameContext.Provider value={setUniName}>
                {children}
            </SetUniNameContext.Provider>
        </UniNameContext.Provider>
    )
}
