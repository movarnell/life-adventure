import { useSelector } from "react-redux"
import { useState } from "react"
import { selectLocationBuilding } from "../../redux"
import ShopLocation from "./ShopBuilding"

export default function Building() {
    const [currentTab, setCurrentTab] = useState<null | string>(null)

    const building = useSelector(selectLocationBuilding)
    if(!building) return "ERROR: No Building Found"

    const hasShop = building.currentProducts?.length

    return (
        <div className="w-4/5">
            <h2>{building.title}</h2>
            { currentTab === "shop" ? <ShopLocation building={building}/> : null }
            <div>
                { hasShop && <button onClick={() => setCurrentTab("shop")}>Shop</button> }
            </div>
        </div>
    )
}