import { CLOCKWISE, COUNTER, DIRECTIONS } from "../directions"
import { tryGetById } from "../getById"
import type { Road, Lot } from "../types"

/**
 * Add the two-way connections between every road and every other road
 * in the entire board
 * 
 * All the lots need to be connected to each other and to the roads
 * for this function to work properly
 * 
 * @param roads All the roads in the map
 * @param lots All the lots in the map
 */
export const connectAllRoadsTogether = (roads: Road[], lots: Lot[]) => {
  for (const road of roads) {
    // Get the directions for the road that don't have lots (and thus point to intersections)
    const directionsToAdd = DIRECTIONS.filter((d) => !road.lots[d])

    // For the two directions left, add the road connections
    directionsToAdd.forEach((direction) => {
      const roadConnections = []

      // Grab the lot in the counter-clockwise direction and add the road that turns that way
      const counterLot = tryGetById(road.lots[COUNTER[direction]], lots)
      if (counterLot) {
        roadConnections.push(counterLot.roads[direction])
      }

      // Grab the lot in the clockwise direction and add the road that turns that way
      const clockwiseLot = tryGetById(road.lots[CLOCKWISE[direction]], lots)
      if (clockwiseLot) {
        roadConnections.push(clockwiseLot.roads[direction])
      }

      // Try to grab the straight road off the two middle lots
      const counterMiddleLot = tryGetById(counterLot?.lots[direction], lots)
      const clockwiseMiddleLot = tryGetById(clockwiseLot?.lots[direction], lots)
      if (counterMiddleLot) {
        roadConnections.push(counterMiddleLot.roads[CLOCKWISE[direction]])
      } else if (clockwiseMiddleLot) {
        roadConnections.push(clockwiseMiddleLot.roads[COUNTER[direction]])
      }

      road.connectedRoads[direction] = roadConnections.filter(r => r) as string[]
    })
  }
}
