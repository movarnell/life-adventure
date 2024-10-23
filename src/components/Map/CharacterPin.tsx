import { useSelector } from "react-redux";
import Pin from "./Pin";
import { selectCharacterLocation } from "../../redux/gameSlice";

export default function CharacterPin() {
    const location = useSelector(selectCharacterLocation)
    return (
        <Pin location={location}>
            C
        </Pin>
    )
}