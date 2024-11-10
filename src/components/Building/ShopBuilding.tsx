import { Building } from "../../shared"

type Props = {
  building: Building
}

export default function ShopBuilding({ building }: Props) {
  return (
    <div>
      {building.currentProducts?.length && <div>
        {building.currentProducts.map(product => (
          <div>
            <h4>{product.name}</h4>
            <p>{product.happiness}</p>
            <button>${product.price}</button>
          </div>
        ))}
      </div>
      }
    </div>
  )
}