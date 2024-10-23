import { OPPOSITE } from "../directions"
import { getById } from "../getById"
import type { Direction, Road, Lot } from "../types"

export const connectLots = (
  direction: Direction,
  lot1: Lot,
  lot2: Lot,
  roads: Road[]
) => {
  lot1.lots[direction] = lot2.id
  lot2.lots[OPPOSITE[direction]] = lot1.id
  const road = getById(lot2.roads[OPPOSITE[direction]], roads)
  lot1.roads[direction] = road.id
  road.lots[OPPOSITE[direction]] = lot1.id
}
