import { useLocalStorage } from "./useLocalStorage"

export function useUniversity() {
    return useLocalStorage<string>("universityName", "")
}
