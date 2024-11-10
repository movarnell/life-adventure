import apartmentImg from "../assets/buildings/apartments.png"
import fastFoodImg from "../assets/buildings/fast-food.png"
import { Product, ProductType } from "./products-data";
import { ID } from "./types";

export enum BuildingType {
    LIVING,
    WORKING,
    SHOPPING,
    EATING
}

export type Building = {
    id: ID;
    type: BuildingType;
    title: string;
    lotId: ID;
    image: string;
    productType: ProductType
    currentProducts?: Product[]
}

type BuildingPlan = Omit<Building, "lotId" | "products">
export const BUILDING_PLANS: BuildingPlan[] = [
    {
        id: "0",
        type: BuildingType.LIVING,
        title: "Green Apartments",
        image: apartmentImg,
        productType: ProductType.None
    },
    {
        id: "1",
        type: BuildingType.WORKING,
        title: "Target",
        image: apartmentImg,
        productType: ProductType.Furniture
    },
    {
        id: "2",
        type: BuildingType.EATING,
        title: "McDonalds",
        image: fastFoodImg,
        productType: ProductType.Food
    },
]

export const testMap1 = {
    buildings: BUILDING_PLANS,
    lots: [
        [null, BUILDING_PLANS[0].id],
        [BUILDING_PLANS[1].id, BUILDING_PLANS[2].id]
    ]
}