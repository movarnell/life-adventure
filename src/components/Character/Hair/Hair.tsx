import { useContext } from "react"
import { HAIR_COMPONENTS, HairType } from "./HAIR_TYPES"
import { SVGContext } from "../SVGContext"
import { getShadowOpacity } from "../getShadowOpacity"

type Props = {
    type: HairType
}

export default function Hair({ type }: Props) {
    const Component = HAIR_COMPONENTS[type]
    const {
        primaryColor: skinColor,
        secondaryColor: hairColor,
        strokeWidth
    } = useContext(SVGContext)

    return (
        <Component
            color={hairColor}
            strokeWidth={strokeWidth}
            shadowOpacity={getShadowOpacity(skinColor)}
        />
    )
}