import type { Lot } from "../../shared"
import BuildingPin from "./BuildingPin"

type Props = {
  lot: Lot
  tileSize: number
}

export default function BoardLot({
  tileSize,
  lot: {
    buildingId,
    centerLocation: [x, y],
  },
}: Props) {
  return (
    <div className="absolute bg-green-200" style={{
      left: (x - 0.5) * tileSize,
      top: (y - 0.5) * tileSize,
    }}>
      {buildingId && <BuildingPin buildingId={buildingId} tileSize={tileSize} />}
    </div>
  )
}
