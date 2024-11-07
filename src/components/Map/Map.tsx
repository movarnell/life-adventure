import { useSelector } from "react-redux"
import { selectMap } from "../../redux"
import Lot from "./Lot"
import Road from "./Road"
import Pin from "./Pin"
import CharacterPin from "./CharacterPin"

type Props = {}
export default function Map({ }: Props) {
    const { lots, roads, rows, columns } = useSelector(selectMap)
    const tileSize = 200

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
                <div className="relative" style={{ width: tileSize * columns, height: tileSize * rows }}>
                    {lots.map((lot, index) => (
                        <Lot
                            key={index}
                            lot={lot}
                            tileSize={tileSize}
                        />
                    ))}
                    <CharacterPin/>
                </div>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={tileSize * columns + "px"}
                    height={tileSize * rows + "px"}
                    viewBox={`-0.5 -0.5 ${columns + 1} ${rows + 1}`}
                    className="absolute"
                >
                    {roads.map((road, index) => (
                        <Road
                            key={index}
                            road={road}
                            tileSize={tileSize}
                        />
                    ))}
                </svg> */}
            </div>

        </>
    )
}