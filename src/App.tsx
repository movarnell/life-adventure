import { useState } from "react";
import Map from "./components/Map";
import TopHUD from "./components/TopHUD";
import Building from "./components/Building/Building";

export default function App() {
  const [currentTab, setCurrentTab] = useState("map")
  return (
    <div className="h-screen w-screen bg-offwhite flex justify-center">
      <TopHUD />
      <div>
        <button onClick={() => setCurrentTab("map")}>Map</button>
        <button onClick={() => setCurrentTab("building")}>Building</button>
      </div>
      <div className="flex-grow mt-20">
        {currentTab === "map" && <Map />}
        {currentTab === "building" && <Building />}
      </div>
    </div>
  )
}