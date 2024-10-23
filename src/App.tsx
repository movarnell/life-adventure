import Map from "./components/Map";
import TopHUD from "./components/TopHUD";

export default function App() {
  return (
    <div className="h-screen w-screen bg-offwhite">
      <TopHUD/>
      <Map/>
    </div>
  )
}