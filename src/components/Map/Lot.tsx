import type { Lot } from "../../shared"
import Building from "./Building/Building"

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
      {buildingId && <Building buildingId={buildingId} tileSize={tileSize} />}
    </div>
  )
}
