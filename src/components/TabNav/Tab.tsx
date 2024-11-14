import { ButtonHTMLAttributes, MouseEvent, useContext } from "react"
import { NavContext } from "./NavContext"
import classNames from "classnames"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    location: string
    children?: React.ReactNode
    activeClass?: string
}

export default function Tab({ location, children, onClick, activeClass, className, ...props }: Props) {
    const { location: currentLocation, setLocation } = useContext(NavContext)
    const isActive = currentLocation === location

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setLocation(location)
        onClick && onClick(event)
    }

    return (
        <button
            disabled={isActive}
            {...props}
            onClick={handleClick}
            className={classNames(className, isActive && activeClass)}
        >
            {children}
        </button>
    )
}