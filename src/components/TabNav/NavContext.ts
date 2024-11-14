import { createContext } from "react";

type NavData = {
    location: string
    setLocation: (newLocation: string) => void
}

export const NavContext = createContext<NavData>({
    location: "",
    setLocation: () => true
})