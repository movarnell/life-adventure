import { ID } from "./types"

export enum ProductType {
    None,
    Food,
    Clothes,
    Furniture,
    Vehicles
}

export type Product = {
    id: ID
    name: string
    happiness: number
    price: number
    type: ProductType
}

export const PRODUCT_OPTIONS: Product[] = [
    {
        id: "0",
        name: "Fries",
        happiness: 20,
        price: 10,
        type: ProductType.Food
    },
    {
        id: "1",
        name: "Burger",
        happiness: 30,
        price: 20,
        type: ProductType.Food
    },
    {
        id: "2",
        name: "Shake",
        happiness: 40,
        price: 50,
        type: ProductType.Food
    },
    {
        id: "3",
        name: "Couch",
        happiness: 80,
        price: 200,
        type: ProductType.Furniture
    },
]