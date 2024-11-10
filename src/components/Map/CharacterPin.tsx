import { useSelector } from "react-redux";
import Pin from "./Pin";
import { selectLocation } from "../../redux/gameSlice";

type Props = {
    tileSize: number
}

export default function CharacterPin({ tileSize }: Props) {
    const { coordinates } = useSelector(selectLocation)
    return (
        <Pin coordinates={coordinates} tileSize={tileSize}>
            C
        </Pin>
    )
}