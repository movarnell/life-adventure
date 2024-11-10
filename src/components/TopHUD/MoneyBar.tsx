import { useSelector } from "react-redux"
import { selectMoney } from "../../redux/gameSlice"
import moneyIcon from "../../assets/icons/money.png"

type Props = {}
export default function MoneyBar({ }: Props) {
  const money = useSelector(selectMoney)
  return (
    <div className="flex items-center w-48">
      <img src={moneyIcon} className="h-14 -me-7 z-10 mb-2"/>
      <div className="flex-grow rounded border-black border-4 mt-1 mb-1 ps-4 text-end pe-2 bg-gray-200 text-xl font-bold">
        ${money}
      </div>
    </div>
  )
}