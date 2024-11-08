import { useSelector } from "react-redux"
import { selectCharacterTime } from "../../redux/gameSlice"
import timeImg from "../../assets/icons/time.png"

type Props = {
  className?: string,
}
export default function TimeBar({ className }: Props) {
  const { current, max } = useSelector(selectCharacterTime)
  const percentage = 100 * current / max
  return (
    <div className={"flex items-center " + className}>
      <img src={timeImg} className="-me-2 z-10 h-14" />
      <div className="flex-grow bg-slate-400 h-8 border-4 border-black rounded flex">
        <div
          className="bg-green-400 border-t-4 border-green-500 text-offwhite h-full text-end pe-2 text-sm"
          style={{ width: percentage + "%" }}
        >
          { percentage > 20 && current + " / " + max }
        </div>
        <div className="flex-grow border-t-4 border-gray-200 bg-offwhite ps-2 text-sm">
          { percentage <= 20 && current + " / " + max }
        </div>
      </div>
    </div>
  )
}