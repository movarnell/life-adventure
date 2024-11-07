import Body from "./Body"
import Face from "./Face"
import Hair from "./Hair/Hair"
import { HAIR_COLORS, HAIR_TYPES, SKIN_COLORS } from "./Hair/HAIR_TYPES"
import { SVGContext } from "./SVGContext"

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
  // Random for now
  const skinColor = SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)]
  const hairColor = HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)]
  const hairType = HAIR_TYPES[Math.floor(Math.random() * HAIR_TYPES.length)]

  const [width, height, strokeWidth] = sizeSpecs[size]

  return (
    <div>
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