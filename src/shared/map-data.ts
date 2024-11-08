import { Building, BuildingType } from "./types";
import apartmentImg from "../assets/buildings/apartments.png"
import fastFoodImg from "../assets/buildings/fast-food.png"

export const BUILDING_PLANS: Omit<Building, "lotId">[] = [
    {
        id: "0",
        type: BuildingType.LIVING,
        title: "Green Apartments",
        image: apartmentImg,
    },
    {
        id: "1",
        type: BuildingType.WORKING,
        title: "Target",
        image: apartmentImg,
    },
    {
        id: "2",
        type: BuildingType.EATING,
        title: "McDonalds",
        image: fastFoodImg,
    },
]

export const testMap1 = {
    buildings: BUILDING_PLANS,
    lots: [
        [null, BUILDING_PLANS[0].id],
        [BUILDING_PLANS[1].id, BUILDING_PLANS[2].id]
    ]
}