import { createContext } from "react";

type SVGData = {
    primaryColor: string
    secondaryColor: string
    strokeWidth: string | number
}

export const SVGContext = createContext<SVGData>({
    primaryColor: "#ffffff",
    secondaryColor: "#000000",
    strokeWidth: "8px"
})