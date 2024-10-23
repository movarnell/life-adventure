import MoneyBar from "./MoneyBar";
import TimeBar from "./TimeBar";

export default function TopHUD() {
  return (
    <div className="fixed w-screen h-20 bg-slate-300 flex justify-between p-5 z-10">
        Character Bar
        <TimeBar className="w-1/2"/>
        <MoneyBar/>
    </div>
  )
}