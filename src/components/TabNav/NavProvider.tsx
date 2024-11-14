import { useState } from "react"
import { NavContext } from "./NavContext"

type Props = {
    defaultLocation?: string
    children: React.ReactNode
}

/**
 * Style-agnostic tabbed navigation  
 * Purposefully does not connect with the address path
 * 
 * @example
 * <NavProvider defaultLocation="home">
 *   <Tab location="home">Home</Tab>
 *   <Tab location="contact">Contact</Tab>
 *   <div>
 *       <Page location="home" element={<Home/>}/>
 *       <Page location="contact" element={<Contact/>}/>
 *   </div>
 * </NavProvider>
 */
export default function NavProvider({ defaultLocation, children }: Props) {
    const [location, setLocation] = useState<string>(defaultLocation || "")
    return (
        <NavContext.Provider value={{ location, setLocation }}>
            {children}
        </NavContext.Provider>
    )
}

