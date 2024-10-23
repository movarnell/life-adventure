import { v4 as uuid } from "uuid"
import { OPPOSITE } from "../directions"
import type { Direction, Road, Lot } from "../types"

/**
 * Creates a road and connects that road to a particular lot
 * and that particular lot to the road
 * 
 * @param direction The direction this road is to the lot
 * @param lot The lot this road needs to be connected to
 * @param start The start location of the road
 * @param end The end location of the road
 * @param roads All the roads in the board that have been created so far
 */
export const connectNewRoad = (
  direction: Direction,
  lot: Lot,
  start: [number, number],
  end: [number, number],
  roads: Road[],
) => {
  // Make road
  const road: Road = {
    id: uuid(),
    lots: [null, null, null, null],
    connectedRoads: {},
    startLocation: start,
    endLocation: end,
  }
  roads.push(road)

  // Connect with lot
  lot.roads[direction] = road.id
  road.lots[OPPOSITE[direction]] = lot.id
}
