import { useSelector } from "react-redux";
import Pin from "./Pin";
import { selectCharacterLocation } from "../../redux/gameSlice";

type Props = {
    tileSize: number
}

export default function CharacterPin({ tileSize }: Props) {
    const location = useSelector(selectCharacterLocation)
    return (
        <Pin location={location} tileSize={tileSize}>
            C
        </Pin>
    )
}