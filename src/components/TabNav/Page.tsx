import { useContext } from "react"
import { NavContext } from "./NavContext"

type Props = {
    location: string
    element: React.ReactNode
}
export default function Page({ location, element }: Props) {
    const { location: currentLocation } = useContext(NavContext)
    return currentLocation === location && element
}