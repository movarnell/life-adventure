import type { Road } from "../../shared"

type Props = {
  tileSize: number
  road: Road
}

export default function BoardRoad({
  road: {
    startLocation: [x1, y1],
    endLocation: [x2, y2],
  },
}: Props) {
  const width = 0.15

  return (
    // <div className="absolute bg-black" style={{
    //   top: (y1 * tileSize) - (width / 2) + "px",
    //   bottom: (y2 * tileSize) + (width / 2) + "px",
    //   left: (x1 * tileSize) - (width / 2) + "px",
    //   right: (x2 * tileSize) + (width / 2) + "px"
    // }}></div>
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={width} stroke="black"/>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={width / 5} strokeDasharray="0.05 0.1" stroke="white"/>
    </g>
  )
}
