import Character from "../Character";
import MoneyBar from "./MoneyBar";
import TimeBar from "./TimeBar";

export default function TopHUD() {
  return (
    <div className="fixed w-screen h-20 bg-slate-300 flex justify-between p-5 z-10">
      <div>
        <div className="bg-gray-200 flex border-4 border-black">
          <Character size="md" />
        </div>
      </div>
      <TimeBar className="w-1/2" />
      <MoneyBar />
    </div>
  )
}