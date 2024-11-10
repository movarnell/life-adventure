import { useDispatch, useSelector } from "react-redux"
import { getBuildingImageSliceSpecs } from "./getBuildingImageSliceSpecs"
import { moveCharacterToBuilding, selectBuilding } from "../../../redux"
import { ID } from "../../../shared"

type Props = {
    buildingId: ID,
    tileSize: number
}

export default function BuildingPin({ buildingId, tileSize }: Props) {
    const building = useSelector(selectBuilding(buildingId))
    if (!building) return null

    const specs = getBuildingImageSliceSpecs(tileSize)

    const dispatch = useDispatch()

    return (
        <div
            className="flex items-end justify-center hover:scale-105"
            style={{
                backgroundImage: `url(${building.image})`,
                backgroundSize: `auto ${specs.size}px`,
                backgroundPosition: `${specs.x}px ${specs.y}px`,
                width: tileSize,
                height: tileSize,
            }}
            onClick={() => dispatch(moveCharacterToBuilding(buildingId))}
            >
            <h4 className="font-display text-offwhite text-3xl">{building.title}</h4>
        </div>
    )
}