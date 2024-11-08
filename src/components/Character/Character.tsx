import { useSelector } from "react-redux"
import Body from "./Body"
import Face from "./Face"
import Hair from "./Hair"
import { SVGContext } from "./SVGContext"
import { selectCharacterAppearance } from "../../redux"

const sizeSpecs = {
  // width, height, strokeWidth
  "sm": [78, 125.75, 14],
  "md": [156, 251.5, 12],
  "lg": [312, 503, 10],
  "xl": [624, 1006, 8]
}

type Props = {
  size: "sm" | "md" | "lg" | "xl"
}

export default function Character({ size = "md" }: Props) {
  const { hairType, hairColor, skinColor } = useSelector(selectCharacterAppearance)
  const [width, height, strokeWidth] = sizeSpecs[size]

  return (
    <div className="py-5 px-2">
      <SVGContext.Provider value={{
        primaryColor: skinColor,
        secondaryColor: hairColor,
        strokeWidth,
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 624 1006"
          version="1.1"
        >
          <Body/>
          <Face/>
          <Hair type={hairType} />
        </svg>
      </SVGContext.Provider>
    </div>
  )
}