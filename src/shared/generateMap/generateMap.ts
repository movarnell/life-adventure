import { v4 as uuid } from "uuid"
import { connectNewRoad } from "./connectNewRoad"
import { connectLots } from "./connectLots"
import { connectAllRoadsTogether } from "./connectAllRoadsTogether"
import { BOTTOM, LEFT, RIGHT, TOP } from "../directions"
import type { Road, Lot, ID } from "../types"
import { testMap1, BUILDING_PLANS } from "../map-data"

export const generateMap = (rows: number, columns: number) => {
  const lots: Lot[] = []
  const roads: Road[] = []

  // Generate every lot by row and column
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Create a new lot
      const lot: Lot = {
        id: uuid(),
        buildingId: testMap1.lots[i][j],
        roads: [],
        lots: [null, null, null, null],
        centerLocation: [j + 0.5, i + 0.5],
      }

      // Create roads and connect to lot, also connect lot to neighbor lots
      i > 0
        ? connectLots(TOP, lot, lots[(i - 1) * columns + j], roads)
        : connectNewRoad(TOP, lot, [j, i], [j + 1, i], roads)
      connectNewRoad(RIGHT, lot, [j + 1, i], [j + 1, i + 1], roads)
      connectNewRoad(BOTTOM, lot, [j, i + 1], [j + 1, i + 1], roads)
      j > 0
        ? connectLots(LEFT, lot, lots[lots.length - 1], roads)
        : connectNewRoad(LEFT, lot, [j, i], [j, i + 1], roads)

      // Add lot to array of lots
      lots.push(lot)
    }
  }
  
  // Connect all roads together
  connectAllRoadsTogether(roads, lots)

  return { 
    lots, 
    roads, 
    rows,
    columns,
    buildings: BUILDING_PLANS.map(b => ({ 
      ...b, 
      lotId: lots.find(l => l.buildingId === b.id)?.id as ID
    }))
  }
}
