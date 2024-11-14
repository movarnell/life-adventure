import Map from "./components/Map";
import TopHUD from "./components/TopHUD";
import Building from "./components/Building/Building";
import { NavProvider, Page } from "./components/TabNav";

export default function App() {
  return (
    <div className="h-screen w-screen bg-offwhite flex justify-center">
      <NavProvider>
        <TopHUD />
        <div className="flex-grow mt-20">
          <Page location="map" element={<Map/>}/>
          <Page location="building" element={<Building/>}/>
        </div>
      </NavProvider>
    </div>
  )
}