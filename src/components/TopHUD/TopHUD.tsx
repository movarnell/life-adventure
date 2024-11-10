import Character from "../Character";
import MoneyBar from "./MoneyBar";
import SkillsBar from "./SkillsBar";
import TimeBar from "./TimeBar";

export default function TopHUD() {
  return (
    <div className="fixed w-screen h-20 flex justify-between p-5 z-10">
      <div>
        <div className="flex border-4 border-black bg-gray-200 rounded">
          <Character size="md" />
          <SkillsBar />
        </div>
      </div>
      <TimeBar className="w-1/2" />
      <MoneyBar />
    </div>
  )
}