import Character from "../Character";
import { Tab } from "../TabNav";
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
      <div>
        <Tab location="map" className="bg-gray-400 p-3 text-white" activeClass="bg-gray-600">Map</Tab>
        <Tab location="building" className="bg-gray-400 p-3 text-white" activeClass="bg-gray-600">Building</Tab>
      </div>
      <TimeBar className="w-1/2" />
      <MoneyBar />
    </div>
  )
}